
### Аутентификация и авторизация

Это два разных процесса, которые часто используются вместе, но решают разные задачи.

### Аутентификация (Authentication)

Это процесс проверки личности пользователя. Она отвечает на вопрос: **«Кто вы?»**. В этом процессе система 
проверяет, является ли пользователь тем, за кого он себя выдает. Аутентификация включает в себя:

- Ввод логина и пароля.
- Использование токенов (например, JWT).
- Аутентификация через сторонние сервисы (например, Google, GitHub и т.д.).
- Двухфакторная аутентификация (2FA).


**Пример:** Ввод логина и пароля на сайте. Если данные корректны, пользователь считается аутентифицированным.

### Авторизация (Authorization)

Это процесс предоставления пользователю прав доступа к ресурсам на основании его прав. Она отвечает на вопрос: 
**«Что вы можете делать?»**. После того как пользователь был аутентифицирован, система проверяет его права и 
решает, какие действия он может выполнять.

- Проверка прав доступа к ресурсам (например, доступ к страницам, API, функциям).
- Разграничение ролей (например, администратор, пользователь, гость).
- Проверка уровня доступа к данным (например, редактирование или просмотр).

**Пример:** После успешной аутентификации пользователь может войти в свой профиль, но для доступа к панели 
администратора ему потребуется соответствующая роль.

#### Основные отличия:

- Аутентификация подтверждает личность пользователя.
- Авторизация проверяет, что пользователю разрешено делать после подтверждения его личности.

### Как реализовать аутентификацию и авторизацию в Next.js?

Реализация аутентификации и авторизации в Next.js может быть выполнена разными способами в зависимости от 
требований проекта. Наиболее популярными подходами являются использование сторонних библиотек, таких как 
NextAuth.js, JWT (JSON Web Tokens), или кастомные решения через API маршруты.

#### Аутентификация с NextAuth.js

**NextAuth.js** — это библиотека для аутентификации, которая интегрируется с Next.js и поддерживает такие 
провайдеры, как Google, GitHub, Facebook, а также кастомные провайдеры.

1. **Установка зависимостей:**
    ```bash
    npm install next-auth
    ```
2. **Создание API маршрута для аутентификации:**
   - `app/api/auth/[...nextauth]/route.js` или `pages/api/auth/[...nextauth].js`
    ```javascript
    import NextAuth from 'next-auth'
    import GoogleProvider from 'next-auth/providers/google'
    
    export const authOptions = {
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET,
    }
    
    const handler = NextAuth(authOptions)
    export { handler as GET, handler as POST }
    ```
3. **Добавление страницы входа:**
   - **Создайте файл в `app/signin/page.js` для кастомной страницы входа:**
    ```javascript
    'use client'
    import { signIn } from 'next-auth/react'
    
    export default function SignIn() {
      return (
        <div>
          <h1>Sign In</h1>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </div>
      )
    }
    ```
4. **Защита страниц с авторизацией:** Для защиты страницы можно использовать `useSession` из `next-auth/react`, 
чтобы проверить, вошел ли пользователь в систему.
```javascript
'use client'
import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function ProtectedPage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (!session && status !== 'loading') {
      signIn() // Перенаправление на страницу входа
    }
  }, [session, status])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return session ? <div>Welcome, {session.user.name}!</div> : null
}
```

#### Аутентификация с использованием JWT (JSON Web Tokens)

`JWT` — популярный метод аутентификации с использованием токенов для хранения информации о пользователе. Токен можно 
использовать для подтверждения авторизации при каждом запросе.

1. **Установка зависимостей:**
    ```bash
    npm install jsonwebtoken bcryptjs
    ```
2. **Создание API маршрута для аутентификации:** - В файле `app/api/auth/route.js` создайте маршрут для входа и 
генерации JWT:
    ```javascript
    import jwt from 'jsonwebtoken'
    import bcrypt from 'bcryptjs'
    
    const users = [
      { id: 1, username: 'admin', password: '$2a$10$...' }, // Пароль должен быть захэширован
    ]
    
    export async function POST(request) {
      const { username, password } = await request.json()
    
      const user = users.find(user => user.username === username);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
      }
    
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
      return new Response(JSON.stringify({ token }), { status: 200 })
    }
    ```
3. **Использование токена на защищенных API маршрутах:** Создайте защищенный маршрут, который проверяет JWT перед 
выполнением логики:
    ```javascript
    import jwt from 'jsonwebtoken'
    
    export async function GET(request) {
      const authHeader = request.headers.get('Authorization')
      if (!authHeader) {
        return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 })
      }
    
      const token = authHeader.split(' ')[1]
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return new Response(JSON.stringify({ message: 'Access granted', user: decoded.userId }), { status: 200 })
      } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 })
      }
    }
    ``` 
4. **Защита клиентских страниц с JWT:**
    ```javascript
    'use client'
    import { useState, useEffect } from 'react'
    import { useRouter } from 'next/navigation'
    
    export default function ProtectedPage() {
      const [token, setToken] = useState(null)
      const router = useRouter()
    
      useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (!storedToken) {
          router.push('/signin')
        } else {
          setToken(storedToken)
        }
      }, [])
    
      return token ? <div>Protected Content</div> : <p>Redirecting...</p>
    }
    ```

### Как можно защитить Next.js приложение от XSS и других уязвимостей?

#### Предотвращение XSS (Cross-Site Scripting)

- **Используйте автоматически экранированный JSX:** В React (и, соответственно, в Next.js), данные в JSX автоматически 
экранируются, что предотвращает внедрение произвольного JavaScript-кода.
- **Осторожно используйте `dangerouslySetInnerHTML`:** Этот метод вставляет HTML напрямую, что делает ваш код уязвимым для XSS. 
Если вам нужно вставить HTML, убедитесь, что он тщательно проверен и безопасен.
- **Валидация и очистка пользовательского ввода:** Если вы принимаете данные от пользователя (например, через формы), 
обязательно очищайте и валидируйте их на сервере. Для этого можно использовать библиотеки вроде DOMPurify, чтобы очистить 
пользовательские данные перед их рендерингом в браузере.
 
#### Использование Content Security Policy (CSP)

Это механизм защиты, который позволяет ограничить ресурсы, которые могут быть загружены и выполнены на странице 
(например, скрипты, стили).

- Добавьте заголовок CSP в ответ сервера. В Next.js это можно сделать в файле `next.config.js` с помощью `headers()`:
    ```javascript
    module.exports = {
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self';"
              }
            ]
          }
        ];
      }
    }
    ```
  Этот заголовок ограничивает выполнение JavaScript только с вашего сайта (источника `'self'`), запрещая выполнение 
сторонних скриптов, что помогает предотвратить XSS.

#### Защита от CSRF (Cross-Site Request Forgery)

CSRF — это атака, при которой злоумышленник заставляет браузер пользователя выполнить несанкционированный запрос 
на веб-сайт, на котором пользователь аутентифицирован. Для защиты от таких атак можно использовать CSRF-токены.

- Используйте библиотеки вроде `csrf` для генерации и проверки CSRF-токенов.
- Для POST-запросов в Next.js API-роутах можно добавлять CSRF-токены и проверять их на сервере.

#### Безопасная работа с cookies

Для обеспечения безопасности cookies (например, сессий), следует:

- Использовать флаг `HttpOnly` для предотвращения доступа JavaScript к `cookies`.
- Использовать флаг `Secure`, чтобы `cookies` передавались только по защищенным каналам (HTTPS).
- Убедитесь, что `cookies` имеют флаг `SameSite` (желательно `Strict` или `Lax`), что предотвращает отправку 
`cookies` с внешних сайтов.

