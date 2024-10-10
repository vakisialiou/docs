
### OOP JS

#### Инкапсуляция:

Это принцип, согласно которому данные и методы, работающие с этими данными, объединяются в единое целое — объект. 
Инкапсуляция защищает внутреннее состояние объекта, предоставляя доступ к нему только через публичные методы (интерфейс). 
Это позволяет скрыть детали реализации и обеспечивает более безопасный и управляемый доступ к данным.

```javascript
class A {
   constructor() {
       this._a = 1
   }
  
   set a(value) {
       this._a = value
   }
  
   get a() {
       return this._a
   }
}
```
 
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
Полиморфизм - это наследования любого класса. Основная его суть заключается в том, что у тебя есть возможность 
переопределить методы родительского класса в дочернем классе, изменив их логику.

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
