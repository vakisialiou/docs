[Назад](../README.md)

### Что вы знаете AccessToken и RefreshToken?

AccessToken и RefreshToken используются для реализации безопасной аутентификации и авторизации в веб-приложениях.

#### Session-based Authentication
- **Как работает:** После успешной аутентификации сервер создаёт сессию для пользователя и отправляет уникальный 
  идентификатор сессии (например, в виде cookie) на клиент. При последующих запросах клиент отправляет этот 
  идентификатор, и сервер проверяет его для авторизации пользователя.
- **Пример:** Использование сессий с модулем express-session в Express.js.

#### Token-based Authentication
- **Как работает:** После успешной аутентификации сервер выдаёт токен (например, JWT), который содержит информацию 
  о пользователе. Токен отправляется клиенту, и каждый запрос от клиента к защищённым ресурсам сопровождается токеном 
  в заголовке Authorization.
- **Пример:** JWT (JSON Web Token), используемый в REST API.

#### API Key Authentication
- **Как работает:** Клиент получает уникальный ключ API при регистрации, который затем отправляется в каждом запросе 
  (например, через заголовок или параметры URL). Сервер проверяет ключ для авторизации доступа к API.
- **Пример:** Использование заголовка x-api-key в запросах.

#### OAuth 2.0
1. AccessToken — это краткосрочный токен, который используется для доступа к защищённым ресурсам на сервере.
   - **Что хранится в AccessToken:** Обычно в AccessToken содержится информация о пользователе (например, его ID) 
   и о правах доступа. Данные шифруются и подписываются, чтобы сервер мог удостовериться в их подлинности.
   - **Где используется:** AccessToken передаётся клиентом в каждом запросе к защищённым маршрутам API, обычно 
   в заголовке ``Authorization: Bearer <AccessToken>``.
   - Когда обновляется: После истечения срока действия AccessToken клиент запрашивает новый с помощью RefreshToken.
2. RefreshToken — это долгосрочный токен, который используется для получения нового AccessToken.
   - **Что хранится в RefreshToken:** В RefreshToken хранится информация, которая позволяет серверу подтвердить 
   подлинность пользователя и сгенерировать новый AccessToken. В отличие от AccessToken, в нём обычно меньше данных, 
   и он передаётся реже.
   - **Где используется:** RefreshToken хранится на клиенте (вместе с AccessToken), но передаётся на сервер только 
   для обновления AccessToken.
   - **Время жизни:** RefreshToken имеет более длительный срок действия, например, несколько дней или недель.
   - **Когда обновляется:** RefreshToken сам по себе не обновляется. Он выдаётся один раз при аутентификации и 
   используется для получения новых AccessToken после их истечения. При истечении RefreshToken пользователь будет 
   вынужден авторизоваться заново для получения новой пары токенов.