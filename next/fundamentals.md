[Назад](../README.md)

### Что такое Next.js и в чем его преимущества по сравнению с обычным React-приложением?

Next.js — это фреймворк на основе React, предназначенный для создания серверно-рендеренных приложений и статических 
веб-сайтов. Он предоставляет множество инструментов для упрощения разработки, такие как автоматическая маршрутизация, 
рендеринг на стороне сервера (SSR), статическая генерация (SSG) и интеграция с API. Next.js расширяет возможности 
React, предоставляя более гибкие способы создания приложений с улучшенной производительностью и SEO.

#### Основные преимущества

1. **Рендеринг на стороне сервера (SSR):** Можно рендерить страницы на сервере и отправлять готовый HTML-код на клиент. 
Это улучшает производительность, особенно на слабых устройствах, и улучшает SEO, так как поисковики получают полные 
страницы, а не загружают их динамически.

2. **Статическая генерация (SSG):** Позволяет генерировать статические страницы во время сборки (`build time`). Эти 
страницы загружаются быстрее, что делает их отличным выбором для контента, который редко меняется (например, блоги 
или маркетинговые сайты).

3. **Автоматическая маршрутизация:** Маршруты создаются автоматически на основе структуры файлов в папке `pages` или `app`. 
Это упрощает создание навигации без необходимости вручную настраивать роутеры.

4. **Гибридный подход (SSR и SSG):** Поддерживает возможность сочетать статическую генерацию и серверный рендеринг на 
уровне отдельных страниц. Например, можно генерировать статические страницы для блога, но серверно рендерить страницы 
админки.

5. **API-роуты:** Позволяет создавать API внутри самого приложения. Файлы в папке `pages/api` создают эндпоинты, которые 
могут быть использованы для взаимодействия с базой данных или другими внешними сервисами. Это делает Next.js удобным для 
создания полного фуллстек-приложения.

6. **Оптимизация производительности:** Автоматически оптимизирует страницы, создавая оптимизированные бандлы и загружая 
только необходимые скрипты для каждой страницы (код сплиттинг). Это снижает объем загружаемого кода и улучшает скорость 
загрузки.

7. **Image Optimization:** Встроенная оптимизация изображений, что позволяет автоматически менять размеры, форматы и 
сжимать изображения для улучшения производительности.

8. **Поддержка TypeScript:** Имеет встроенную поддержку `TypeScript` без необходимости дополнительных настроек, что 
делает работу с типизированным `JavaScript` более удобной.

### Как работает файловая маршрутизация в Next.js?

В Next.js с версии `13` был введен новый подход к файловой маршрутизации с использованием папки `app`, которая заменяет 
традиционную папку `pages`. В этой новой модели app маршруты создаются с использованием серверных компонентов React и 
поддерживают более гибкую архитектуру для создания сложных приложений.

1. **Статические маршруты** - Каждый файл page.js внутри папки представляет собой маршрут, соответствующий имени папки.
    ```bash
    /app
      /about/
        /page.js      -> /about
      /contact/
        /page.js      -> /contact
      /blog/
        /page.js      -> /blog
    ```
2. **Динамические маршруты `[param]`** - Динамические маршруты создаются с помощью квадратных скобок, например, `[id]`. 
Они позволяют создавать страницы с динамическими параметрами в URL.
    ```bash
    /app
      /blog/
        /[id]/
          /page.js    -> /blog/:id
    ```
3. **Параллельные маршруты `@folder`** - Параллельные маршруты позволяют рендерить несколько частей интерфейса одновременно. 
Эти части могут находиться в разных директориях с использованием символа `@`.
    ```bash
    /app
      /@header/
        /page.js    -> Рендерится как заголовок на всех страницах
      /@sidebar/
        /page.js    -> Рендерится как боковая панель
      /blog/
        /page.js    -> Основной контент страницы блога
    ```
4. **Динамические сегменты с несколькими параметрами `[param1]/[param2]`** - Можно создавать вложенные динамические 
маршруты с несколькими параметрами.
    ```bash
    /app
      /products/
        /[category]/
          /[productId]/
            /page.js  -> /products/:category/:productId
    ```
   - `/products/electronics/123`
   - `/products/furniture/456`
5. **Catch-all маршруты `[...slug]`** - Catch-all маршруты также используются для захвата всех возможных сегментов после 
определенного пути.
    ```bash
    /app
      /docs/
        /[...slug]/
          /page.js  -> /docs/:slug* (обрабатывает любые глубины вложенности)
    ```
   - `/docs`
   - `/docs/introduction`
   - `/docs/guides/advanced/topic`

### Чем отличаются методы получения данных getStaticProps, getServerSideProps и getInitialProps?

`getStaticProps` - Используется для получения данных во время сборки (`build time`). Это значит, что данные загружаются и 
рендерятся на этапе компиляции, а не на сервере при каждом запросе.

`getServerSideProps` - Используется для получения данных на сервере при каждом запросе. Это значит, что данные загружаются 
и рендерятся на сервере каждый раз, когда пользователь обращается к странице.

**Warning!** `getStaticProps` и `getServerSideProps` доступны только на страницах (`pages`), **не** работает в `app`

`getInitialProps` - Позволяет загружать данные как на сервере, так и на клиенте. Он вызывается перед рендерингом страницы, 
и это может происходить как на сервере (при первом запросе), так и на клиенте (при навигации между страницами).

### Что такое статическая генерация (SSG)?

**SSG** - это метод, при котором страницы генерируются во время сборки приложения (`build time`). Все страницы создаются 
заранее и сохраняются как статические HTML-файлы, которые могут быть быстро отданы пользователю при запросе.

В контексте `app` директории, статическая генерация достигается через `generateStaticParams`. Этот метод позволяет создать 
статические параметры для маршрутов.

```javascript
// app/posts/[id]/page.js
export async function generateStaticParams() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  // Генерация параметров для всех постов
  return posts.map(post => ({
    id: post.id.toString(),
  }))
}

export default async function Post({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`)
  const post = await res.json()

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

### Что такое серверный рендеринг (SSR)?

**SSR** - это метод, при котором страницы генерируются на сервере при каждом запросе пользователя. Когда пользователь 
запрашивает страницу, сервер обрабатывает запрос, получает необходимые данные и создает HTML в реальном времени.

```javascript
// app/users/[id]/page.js
export default async function User({ params }) {
  const res = await fetch(`https://api.example.com/users/${params.id}`, { cache: 'no-store' })
  const user = await res.json()

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
```

### Что такое Incremental Static Regeneration (ISR)?

**ISR** — это метод, который сочетает в себе преимущества статической генерации (SSG) и динамического рендеринга. Он 
позволяет создавать и обновлять статические страницы после первоначальной сборки, обеспечивая актуальность контента 
без необходимости полной пересборки приложения. Можете задать время обновления страницы с помощью свойства `revalidate`

В контексте `app` можно реализовать с помощью `fetch` и настройки кэширования для обновления страниц.

```javascript
// app/posts/[id]/page.js
export default async function Post({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`, { next: { revalidate: 10 } })
  const post = await res.json()

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

При первоначальном запросе страница будет сгенерирована на сервере. Через `10` секунд (время, заданное в `revalidate`), 
следующая версия страницы будет обновлена, если пользователь снова её запрашивает.

### Что такое клиентский рендеринг (CSR)?

**CSR** — это метод рендеринга веб-страниц, при котором весь процесс генерации HTML происходит на стороне клиента 
(в браузере), а не на сервере. В случае использования Next.js, клиентский рендеринг осуществляется с помощью JavaScript, 
который выполняется в браузере после загрузки страницы.

Для клиентского рендеринга вы можете использовать `useEffect` для загрузки данных после рендеринга.

```javascript
// app/products/page.js
import { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://api.example.com/products')
      const data = await res.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
```