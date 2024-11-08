[Назад](../README.md)

### Опишите, как использовать express.static для раздачи статических ресурсов.

Для раздачи статических файлов, используется middleware express.static. Этот метод позволяет вам указать директорию, 
где хранятся ваши статические ресурсы, и Express автоматически начнет обслуживать эти файлы при запросе к 
соответствующему URL.

1. **Подключение middleware:** Добавьте middleware express.static в ваше приложение, чтобы раздавать статические файлы.
2. **Указание директории с файлами:** Укажите путь к папке, где находятся ваши статические файлы (например, папка public).
3. **Привязка к определенному URL-пути (опционально):** Вы можете задать путь на сервере, по которому файлы будут доступны.


Раздача всех файлов, которые находятся в папке public. Если, например, в этой папке есть файл style.css, то он будет 
доступен по пути http://localhost:3000/style.css. 
#### Пример кода:
```javascript
express.static(path.join(__dirname, 'public'))
```

Раздача всех файлов, которые находятся в папке public. Можете указать базовый URL для доступа к статическим файлам, 
чтобы клиентские запросы шли через указанный путь. Если, например, в этой папке есть файл style.css, то он будет 
доступен по пути http://localhost:3000/static/style.css.
#### Пример кода:
```javascript
app.use('/static', express.static(path.join(__dirname, 'public')))
```

### Как работает кэширование статических файлов?

Кэширование статических файлов позволяет браузерам (и промежуточным системам, например, прокси-серверам) сохранять 
файлы локально, чтобы при последующих запросах не загружать их повторно с сервера. Это ускоряет загрузку страницы, 
снижает нагрузку на сервер и улучшает пользовательский опыт.

- Заголовки кэширования
  - **``Cache-Control: public, max-age=86400``** Устанавливает политику кэширования. Это основной заголовок для 
  управления кэшированием.
    - public: Файл может кэшироваться любым клиентом, включая прокси-сервера.
    - private: Файл может кэшироваться только конкретным клиентом, но не прокси.
    - no-store: Файл не должен кэшироваться.
    - max-age=seconds: Устанавливает максимальное время кэширования в секундах.
  - **Expires:** Указывает дату и время, когда ресурс устареет и должен быть повторно загружен.
  - **ETag:** Уникальный идентификатор версии файла. Если файл изменится, идентификатор тоже изменится.
  - **Last-Modified:** Показывает время последнего изменения файла. Клиент может использовать это время, чтобы спросить 
  у сервера, изменился ли файл с тех пор.

1. Первый запрос (кэширование файла):
   - Когда браузер впервые запрашивает ресурс (например, CSS-файл или изображение), сервер отвечает с полным телом 
   файла и добавляет заголовки ETag и Last-Modified в ответ.
   - Браузер сохраняет файл вместе с заголовками ETag и Last-Modified в своём кэше.
2. Последующие запросы (проверка актуальности файла):
   - Когда браузеру снова требуется этот файл, и он есть в кэше, браузер сначала отправит условный запрос к серверу, 
   чтобы проверить, изменился ли файл. Браузер использует заголовки ``If-None-Match`` (для ETag) и ``If-Modified-Since``
   (для Last-Modified).
3. Как браузер использует ETag для проверки
   - Когда браузер отправляет запрос на проверку актуальности файла с использованием ETag, он добавляет 
   заголовок ``If-None-Match``, содержащий значение ETag, которое сервер отправил при первом запросе.
   - Если ETag совпадает с текущей версией файла на сервере, сервер отвечает кодом 304 Not Modified. 
   Браузер загружает файл из кэша и не получает файл повторно.
   - Если ETag не совпадает (например, файл был изменён), сервер отправит новый файл и новый ETag.
4. Как браузер использует Last-Modified для проверки
   - Если браузер хочет проверить актуальность файла по дате последнего изменения, он отправит заголовок 
   ``If-Modified-Since``, содержащий дату и время, которые сервер указал в заголовке ``Last-Modified`` при первом 
   запросе.
   - Если файл не изменился с момента, указанного в заголовке If-Modified-Since, сервер ответит кодом 304 Not Modified, 
   и браузер загрузит файл из кэша.
   - Если файл изменился, сервер отправит новый файл и обновлённые заголовки Last-Modified и, возможно, ETag.
