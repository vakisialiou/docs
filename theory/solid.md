
### SOLID 
Это набор пяти принципов объектно-ориентированного проектирования.
Название SOLID является акронимом, где каждая буква представляет отдельный принцип:

#### S - Single Responsibility Principle (SRP): Принцип единственной ответственности

**Плохой пример:**

```javascript
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  
  save() {
    // Сохраняем пользователя в базу данных
  }

  sendEmail() {
    // Отправляем email пользователю
  }
}
```
В этом примере класс ``User`` имеет две ответственности, управление данными пользователя
и отправка ``email``. Если потребуется изменить способ отправки ``email``, это повлияет на класс ``User``.

**Хороший пример:** 

```javascript
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

class UserRepository {
  save(user) {
    // Сохраняем пользователя в базу данных
  }
}

class EmailService {
  sendEmail(user) {
    // Отправляем email пользователю
  }
}
```

Теперь каждая часть имеет одну ответственность,
- ``User`` управляет данными.
- ``UserRepository`` отвечает за сохранение.
- ``EmailService`` отвечает за отправку ``email``.


#### O - Open/Closed Principle (OCP): Принцип открытости/закрытости

- **Открыт для расширения:** Вы можете добавлять новый функционал без изменения существующего кода.
- **Закрыт для модификации:** Существующий код не должен изменяться для добавления нового функционала.
- **Основная идея:** Вместо изменения существующего кода, вы добавляете новый функционал через 
расширение (например, добавление новых классов).

**Плохой пример:**
```javascript
class AreaCalculator {
  smoeCalc(shape) {
    if (shape instanceof Circle) {
        return (Math.PI * shape.radius * shape.radius) * 1.5 / 2
    } else if (shape instanceof Rectangle) {
        return (shape.width * shape.height) * 1.5 / 2
    }
    throw new Error('Unknown shape')
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}
```

Если мы добавим новую фигуру, например, Triangle, нам придется модифицировать AreaCalculator.

**Хороший пример:**
```javascript
class Shape {
  area() {
    throw new Error(`Метод 'area' должен быть реализован в подклассе`)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius * this.radius
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

class AreaCalculator {
  smoeCalc(shape) {
    return shape.area() * 1.5 / 2
  }
}

```

Теперь, если мы добавим новую фигуру (например, Triangle), нам не нужно изменять AreaCalculator, 
так как он просто вызывает метод area() и делает необходимое вычисление.

#### L - Liskov Substitution Principle (LSP): Принцип подстановки Лисков
Это типичное наследование классов с переопределением методов и с сохранением ожидаемого поведения базового класса.

**Плохой пример:**
```javascript
class Bird {
  fly() {
    throw new Error(`Метод 'area' должен быть реализован в подклассе`)
  }
}

class Sparrow extends Bird {
  fly() {
    console.log('Sparrow is flying!')
  }
}

class Ostrich extends Bird {
  // Страус наследует метод fly, хотя летать не умеет
}

function makeBirdFly(bird) {
  bird.fly()
}

const sparrow = new Sparrow()
sparrow.fly()

const ostrich = new Ostrich()
ostrich.fly() // Ошибка!
```

- **Нарушение ожиданий:** В коде ожидается, что все объекты типа Bird могут летать, но это неверно для страуса. 
Когда мы вызываем fly() у страуса, это противоречит реальности, и может привести к логическим ошибкам.
- **Нарушение LSP:** Подкласс (Ostrich) не может заменять базовый класс (Bird), так как он не поддерживает 
всё поведение родительского класса, в частности, метод fly().

**Хороший пример:**
```javascript
class Bird {
  // Общий класс для всех птиц.
}

class WalkingBird extends Bird {
  walk() {
    throw new Error(`Метод 'walk' должен быть реализован в подклассе`)
  }
}

class FlyingBird extends Bird {
  fly() {
    throw new Error(`Метод 'fly' должен быть реализован в подклассе`)
  }
}

class WalkingAndFlyingBird extends Bird {
  walk() {
    throw new Error(`Метод 'walk' должен быть реализован в подклассе`)
  }

  fly() {
    throw new Error(`Метод 'fly' должен быть реализован в подклассе`)
  }
}

class Sparrow extends WalkingAndFlyingBird {
  fly() {
    console.log('Sparrow is flying!')
  }
  walk() {
    console.log('Sparrow is walking!')
  }
}

class Ostrich extends WalkingBird {
  walk() {
    console.log('Ostrich is walking!')
  }
}

// Функция для птиц которые умеют летать.
function makeFlyingBirdFly(bird) {
  bird.fly()
}

// Функция для птиц которые умеют ходить.
function makeWalkingBirdWalk(bird) {
  bird.walk()
}

const sparrow = new Sparrow()
makeFlyingBirdFly(sparrow)

const ostrich = new Ostrich()
// makeFlyingBirdFly(ostrich) // Ошибка! Struthio не может быть передан как летающая птица
makeWalkingBirdWalk(sparrow)
makeWalkingBirdWalk(ostrich)
```

#### I - Interface Segregation Principle (ISP): Принцип разделения интерфейса

#### D - Dependency Inversion Principle (DIP): Принцип инверсии зависимостей
