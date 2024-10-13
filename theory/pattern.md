### Распространенные паттерны ООП

#### Singleton:
- Гарантирует, что класс имеет только один экземпляр и предоставляет глобальную точку доступа к нему.
- Применение: управление доступом к ресурсам, например, к базе данных или к конфигурации приложения.

```javascript
let i = 0
class Singleton {
  constructor() {
    if (Singleton.inst) {
      return Singleton.inst
    }

    this.data = `Singleton instance index: ${++i}`
    
    Singleton.inst = this
  }

  getData() {
    return this.data
  }
}

const instance1 = new Singleton()
const instance2 = new Singleton()

console.log(instance1 === instance2) // true
console.log([instance1.getData(), instance2.getData()])
```

#### Factory:
- Определяет интерфейс для создания объекта, но позволяет подклассам изменять тип создаваемых объектов.
- Применение: когда не известно, какой класс создавать заранее, или когда необходимо создать объект одного из множества классов.


```javascript
// Интерфейс класс
class Transport {
  deliver() {
    throw new Error(`Метод 'deliver' должен быть реализован в подклассе`)
  }
}

class Path {
  points() {
    throw new Error(`Метод 'points' должен быть реализован в подклассе`)
  }
}
```

```javascript
// Абстрактный класс - Factory class
class Logistics {
  /** 
   * Factory Method.
   * 
   * @returns {Transport}
   * @exception
   */
  createTransport() {
    throw new Error(`Метод 'createTransport' должен быть реализован в подклассе`)
  }

  /**
   * Factory Method.
   *
   * @returns {Path}
   * @exception
   */
  createPath() {
    throw new Error(`Метод 'createTransport' должен быть реализован в подклассе`)
  }

  planDelivery() {
    this.createPath().points()
    this.createTransport().deliver()
  }
}
```

```javascript
class Truck extends Transport {
  deliver() {
    console.log(`Доставка по суше на грузовике.`)
  }
}

class Ship extends Transport {
  deliver() {
    console.log(`Доставка по морю на корабле.`)
  }
}
```

```javascript
class TruckPath extends Path {
  points() {
    console.log([1, 2, 3])
  }
}

class ShipPath extends Path {
  points() {
    console.log([1, 2, 3, 4, 5, 6])
  }
}
```

```javascript
class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck()
  }

  createPath() {
    return new TruckPath()
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship()
  }

  createPath() {
    return new ShipPath()
  }
}

new RoadLogistics().planDelivery()
new SeaLogistics().planDelivery()
```

OR

```javascript
class LogisticsFactory extends Logistics {
  createTransport(type) {
    switch (type) {
      case 'truck':
        return new Truck()
      case 'ship':
        return new Ship()
      default:
        throw new Error('Unknown transport type.')
    }
  }

  createPath(type) {
    switch (type) {
      case 'truck':
        return new TruckPath()
      case 'ship':
        return new ShipPath()
      default:
        throw new Error('Unknown path type.')
    }
  }
}

new LogisticsFactory().planDelivery('truck')
new LogisticsFactory().planDelivery('ship')
```

В данном случае, последний пример избыточный. Так же, он нарушает принцип SOLID - Open/Closed Principle.
В некоторых случаях это может быть простым решением.

#### Strategy:
- Определяет семейство алгоритмов, инкапсулирует их и делает их взаимозаменяемыми. Позволяет изменять алгоритм 
независимо от клиентов, которые его используют.
- Применение: выбор алгоритма выполнения на лету, например, разные способы сортировки.

```javascript
// Интерфейс класс
class SortingStrategy {
  sort(data) {
    throw new Error(`Метод 'sort' должен быть реализован в подклассе`)
  }
}

// Сортировка по возрастанию
class AscendingSort extends SortingStrategy {
  sort(data) {
    return data.sort((a, b) => a - b)
  }
}

// Сортировка по убыванию
class DescendingSort extends SortingStrategy {
  sort(data) {
    return data.sort((a, b) => b - a)
  }
}

class Sorter {
  /** @param {SortingStrategy} strategy */
  constructor(strategy) {
    this.strategy = strategy
  }

  /**
   * 
   * @param {SortingStrategy} strategy
   * @returns {this}
   */
  setStrategy(strategy) {
    this.strategy = strategy
    return this
  }

  /**
   * 
   * @param {[]} data
   * @returns {[]}
   */
  sort(data) {
    return this.strategy.sort(data)
  }
}

const data = [5, 3, 8, 1, 2]
const sorter = new Sorter(new AscendingSort())
console.log(sorter.sort(data)) // Сортировка по возрастанию: [1, 2, 3, 5, 8]
console.log(sorter.setStrategy(new DescendingSort()).sort(data)) // Сортировка по убыванию: [8, 5, 3, 2, 1]
```

#### Observer (Наблюдатель):
- Определяет зависимость «один ко многим» между объектами, так что когда один объект изменяет состояние, все 
зависимые объекты уведомляются и обновляются автоматически.
- Применение: события в пользовательском интерфейсе или реактивное программирование.

Можно сказать, что ``EventEmitter`` в ``Node.js`` из коробки реализует паттерн ``Observer``.

```javascript
const EventEmitter = require('events')

// Использование
const emitter = new EventEmitter()

// Наблюдатель 1
emitter.on('state-changed', (data) => () => {
  console.log(`${this.name} получил обновление: ${data}`)
})
// Наблюдатель 2
emitter.on('state-changed', (data) => {
  console.log(`${this.name} получил обновление: ${data}`)
})

// Изменяем состояние
emitter.emit('Состояние A') // Уведомление всех наблюдателей
emitter.emit('Состояние B') // Уведомление всех наблюдателей
```

#### Decorator:
- Позволяет добавлять новое поведение объектам, оборачивая их в другие объекты.
- Применение: добавление функций в объекты во время выполнения, например, в графических интерфейсах.

```javascript
// Интерфейс класс
class Beverage {
  cost() {
    return 0
  }

  description() {
    return 'Unknown Beverage'
  }
}

class Coffee extends Beverage {
  cost() {
    return 5
  }

  description() {
    return 'Coffee'
  }
}

// Decorator
class BeverageDecorator extends Beverage {
  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  cost() {
    return this.beverage.cost() // Возврат стоимости оригинального объекта
  }

  description() {
    return this.beverage.description() // Возврат описания оригинального объекта
  }
}
```

#### Adapter:
- Позволяет объектам с несовместимыми интерфейсами работать вместе.
- Применение: интеграция сторонних библиотек или систем.

```javascript
class OldCharger {
  charge() {
    console.log('Зарядка с использованием старого зарядного устройства.')
  }
}

class NewCharger {
  chargeWithTypeC() {
    console.log('Зарядка с использованием зарядного устройства USB Type-C.')
  }
}

// Адаптер
class ChargerAdapter {
  constructor(newCharger) {
    this.newCharger = newCharger
  }

  charge() {
    this.newCharger.chargeWithTypeC()
  }
}

const oldCharger = new OldCharger()
oldCharger.charge()

const adapter = new ChargerAdapter(new NewCharger())
adapter.charge()
```

#### Facade:
- Предоставляет упрощенный интерфейс к более сложной системе классов.
- Применение: упрощение использования сложной системы, например, API для работы с библиотекой.

```javascript
class Pizza {
  prepare() {
    console.log('Пицца приготовлена.')
  }
  
  bake() {
    console.log('Пицца запечена.')
  }
  
  cut() {
    console.log('Пицца нарезана.')
  }
  
  box() {
    console.log('Пицца упакована.')
  }
}

class Drink {
  prepare() {
    console.log('Напиток приготовлен.')
  }

  serve() {
    console.log('Напиток подан.')
  }
}

// Фасад
class PizzaOrderFacade {
  constructor() {
    this.pizza = new Pizza()
    this.drink = new Drink()
  }

  order() {
    console.log('Заказ пиццы и напитка:')
    this.pizza.prepare()
    this.pizza.bake()
    this.pizza.cut()
    this.pizza.box()
    this.drink.prepare()
    this.drink.serve()
    console.log('Ваш заказ готов!')
  }
}

// Использование
new PizzaOrderFacade().order()
```
