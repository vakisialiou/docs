
### Анти-паттерны 

Это типичные решения, которые на первый взгляд кажутся полезными и рабочими, но в долгосрочной перспективе приводят к 
проблемам в проекте, ухудшению читаемости и поддерживаемости кода, и создают технический долг. Они могут появляться из-за 
недостатка опыта, желания ускорить разработку или неоправданных компромиссов.

#### Основные характеристики анти-паттернов:

- **Решение, кажущееся правильным:** На начальном этапе использования анти-паттерн может казаться удачным и удобным решением, 
но с течением времени приводит к проблемам.
- **Долгосрочные проблемы:** Анти-паттерны увеличивают сложность кода и его поддержку, затрудняют тестирование, вызывают 
проблемы с производительностью или расширяемостью системы.
- **Обход правильных практик:** Анти-паттерны возникают, когда правильные архитектурные или программные решения игнорируются, 
либо из-за желания сэкономить время, либо из-за недостатка знаний.

#### Big Ball of Mud (Большой грязный комок)

Это один из самых известных анти-паттернов. Программа превращается в непонятную и неструктурированную «массу» из-за отсутствия 
ясной архитектуры, модульности и разделения ответственности.

Признаки:
- Модули программы тесно связаны друг с другом.
- Отсутствие чёткого архитектурного разделения.
- Изменение одной части кода требует модификации множества других частей.
- Трудности с пониманием кода.

#### God Object (Объект-бог)

Анти-паттерн, при котором один объект или класс становится ответственным за слишком большое количество задач, нарушая принцип 
единственной ответственности (Single Responsibility Principle). Такой объект знает слишком много о разных частях системы и 
управляет ими.

Признаки:
- Класс выполняет множество несвязанных функций.
- Класс управляет разными аспектами приложения, что делает его сложно модифицируемым.
- Изменение одной части функциональности в классе может повлиять на другую часть.

#### Spaghetti Code (Спагетти-код)

Анти-паттерн, при котором код становится запутанным и сложным для понимания из-за множества условных операторов, циклов и тесно 
переплетающихся частей. Такой код трудно поддерживать, тестировать и модифицировать.

Признаки:
- Логика программы перемешана в длинные последовательности кода.
- Много взаимосвязанных частей, часто использующих глобальные переменные.
- Изменение одной части кода требует изменения многих других.

**Пример:**

```javascript
function processOrder(order) {
  if (order.status === 'new') {
    console.log('Processing new order')
  } else if (order.status === 'processing') {
    if (order.paymentMethod === 'creditCard') {
      console.log('Processing credit card payment')
    } else if (order.paymentMethod === 'paypal') {
      console.log('Processing PayPal payment')
    }
  } else if (order.status === 'shipped') {
    console.log('Order has been shipped')
  }
}
```

**Как исправить:**

Использование паттерна `Strategy` может помочь разделить логику обработки заказа на отдельные стратегии.

```javascript
class OrderProcessor {
  process(order) {
    switch (order.status) {
      case 'new':
        this.processNewOrder(order)
        break;
      case 'processing':
        this.processPayment(order)
        break;
      case 'shipped':
        this.handleShippedOrder(order)
        break;
    }
  }

  processNewOrder(order) {
    console.log('Processing new order')
  }

  processPayment(order) {
    switch (order.paymentMethod) {
      case 'creditCard':
        console.log('Processing credit card payment')
        break;
      case 'paypal':
        console.log('Processing PayPal payment')
        break;
    }
  }

  handleShippedOrder(order) {
    console.log('Order has been shipped')
  }
}
```
