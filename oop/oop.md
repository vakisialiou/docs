[Назад](../README.md)

**Имплементация интерфейсов** — это процесс, когда класс или объект реализует методы, определённые в интерфейсе. 
Интерфейс сам по себе задаёт только контракт, то есть описывает, какие методы и свойства должны быть у класса, 
но не содержит их реализации. Класс, который "имплементирует" интерфейс, обязан реализовать все эти методы и свойства.

### OOP
В контексте JavaScript объектно-ориентированное программирование (ООП) немного отличается от других языков, 
но основные принципы остаются схожими.

Это парадигма программирования, основанная на четырех ключевых принципах:

#### Инкапсуляция:

Это принцип, согласно которому данные и методы, работающие с этими данными, объединяются в единое целое — объект. 
Инкапсуляция защищает внутреннее состояние объекта, предоставляя доступ к нему только через публичные методы (интерфейс). 
Это позволяет скрыть детали реализации и обеспечивает более безопасный и управляемый доступ к данным.

```javascript
class A {
   #a
   constructor() {
       this.#a = 1
   }
  
   set a(value) {
       this.#a = value
   }
  
   get a() {
       return this.#a
   }
}
```

Замыкание в JS попадают под определение инкапсуляции. 
Стоит отметить что замыкание это функциональный и более низкоуровневый механизм, обеспечивающим скрытие переменных через функции. 
Замыкание и инкапсуляция решают схожие задачи, но на разных уровнях.
 
```javascript
function A() {
  let a = 1

  this.setA = (value) => {
    a = value
  }

  this.getA = () => {
    return a
  }
}
```

#### Наследование:
Этот принцип позволяет создавать новые классы на основе существующих. Новый класс (наследник) наследует свойства и методы 
родительского класса (суперкласса), что позволяет повторно использовать код и создавать иерархии классов.

```javascript
class B extends A {
  constructor() {
    super()
    this._b = 2
  }

  set b(value) {
    this._b = value
  }

  get b() {
    return this._b
  }
  
  calc() {
    return this._b + this.getA()
  }
}

const inst = new B()
console.log([inst instanceof B, inst instanceof A])
```

```javascript
function B() {
    A.call(this)

    let b = 2

    this.setB = (value) => {
        b = value
    }

    this.getB = () => {
        return b
    }

    this.calc = () => {
        return b + this.getA()
    }
}

B.prototype = Object.create(A.prototype)
B.prototype.constructor = B

const inst = new B()
console.log([inst instanceof B, inst instanceof A])
```

#### Полиморфизм:
Полиморфизм - это наследования любого класса. Основная его суть заключается в том, что можно переопределить методы 
родительского класса в дочернем классе, изменив их логику. Этот принцип не накладывает строгих ограничений на то, 
как поведение изменяемого метода должно быть реализовано.

```javascript
class Animal {
    speak() {
        throw new Error(`Метод 'speak' должен быть реализован в подклассе`)
    }
}

class Dog extends Animal {
    speak() {
        return 'Гав!'
    }
}

class Cat extends Animal {
    speak() {
        return 'Мяу!'
    }
}

const dog = new Dog()
const cat = new Cat()

console.log([dog.speak(), cat.speak()])

```

#### Абстракция:

Абстракция заключается в выделении основных характеристик объекта и игнорировании второстепенных. Это позволяет 
сосредоточиться на важной информации, не загромождая код деталями. Абстракция часто реализуется с помощью абстрактных 
классов и интерфейсов. Такие классы описывают свойства и методы, которые должны быть реализованы в наследующих классах.

```javascript
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error(`Нельзя создать экземпляр абстрактного класса 'Shape'`)
        }
    }

    area() {
        throw new Error(`Метод 'area' должен быть реализован в подклассе`)
    }

    describe() {
        return `Площадь фигуры: ${this.area()}`
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

const circle = new Circle(5)
const rectangle = new Rectangle(4, 6)
console.log([circle.describe(), rectangle.describe()])
```

- [SOLID](./solid.md)
- [Pattern](./pattern.md)
