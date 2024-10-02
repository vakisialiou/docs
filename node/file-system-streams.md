[Назад](../README.md)

### Как выполняются файловые операции (чтение, запись, удаление) в Node.js?

В Node.js файловые операции, такие как чтение, запись и удаление файлов, выполняются с использованием 
встроенного модуля fs (filesystem). Этот модуль предоставляет как асинхронные, так и синхронные методы 
для работы с файлами. Вот основные способы выполнения этих операций:
- **Асинхронное чтение** - ``fs.readFile('example.txt', 'utf8', (err, data) => {})``
- **Синхронное чтение** - ``const data = fs.readFileSync('example.txt', 'utf8');``

### Объясните разницу между синхронными и асинхронными файловыми операциями.
Здесь важно понимать различия работы этих методов:
- **Синхронные методы** заблокируют основной поток до его завершения.
- **Асинхронные методы** НЕ блокирует работу основного потока. Выполнение кода в основном потоке продолжается, 
а операция выполняется в фоновом режиме. Как правило, такая операция будет передана в пул потоков (библиотеки libuv) 
либо в системную программу которая запустит в отдельном потоке. По окончанию операции будет вызван колбэк.

### Выбор между использованием методов fs.open и fs.write или fs.writeFile в Node.js
- ``fs.writeFile`` и ``fs.readFile``
  - **Простота:** Эти методы обеспечивают более простой и чистый синтаксис для чтения и записи файлов.
  - **Автоматическое управление:** fs.writeFile автоматически открывает файл, записывает в него данные и закрывает его. 
  Вам не нужно беспокоиться о том, как управлять файловыми дескрипторами.
  - **Хорошо подходит для большинства случаев:** Если вам нужно просто записать или прочитать данные, это лучший 
  и наиболее распространенный способ.
- ``fs.open`` и ``fs.write``
  - **Большая гибкость:** Эти методы позволяют более тонко настраивать операции с файлами. Вы можете открывать файл 
  в различных режимах (например, для добавления, чтения и записи), а также работать с файловыми дескрипторами.
  - **Управление файловыми дескрипторами:** Вы должны помнить о том, чтобы закрыть файл после завершения операций. 
  Это может добавить немного сложности в код.
  - **Полезно в специфических сценариях:** Если вам нужно выполнять множество операций записи в один и тот же файл 
  без повторного открытия, такое использование может быть более эффективным.


### Что такое файловые потоки в Node.js и как они работают?
Файловые потоки в Node.js представляют собой способ работы с файлами, который позволяет читать и записывать данные 
последовательно, по частям. Это особенно полезно для обработки больших файлов, поскольку позволяет уменьшить 
использование памяти и избежать загрузки всего файла в память сразу.
- Основные типы файловых потоков:
  - Читающие потоки (Read Streams): Используются для чтения данных из файла.
  - Записывающие потоки (Write Streams): Используются для записи данных в файл.
  - Дуплексные потоки (Duplex Streams): Позволяют одновременно читать и записывать данные (например, в HTTP-запросах).

### Как обрабатывать большие файлы с помощью потоков в Node.js?
1. Чтение больших файлов с помощью потоков
    - Используйте ``fs.createReadStream()`` для создания потока чтения. Вы можете обрабатывать данные по частям, 
   используя события, такие как data, end и error.
2. Запись больших файлов с помощью потоков
    - Используйте ``fs.createWriteStream()`` для создания потока записи. Вы можете записывать данные по частям, 
   которые могут поступать от другого потока или из другого источника.
3. Чтение и запись одновременно 
    ```js
    const fs = require('fs');

    const readStream = fs.createReadStream('large-file.txt');
    const writeStream = fs.createWriteStream('copy-large-file.txt');
    
    readStream.pipe(writeStream);
    
    writeStream.on('finish', () => {
        console.log('Копирование завершено.');
    });
    
    writeStream.on('error', (err) => {
        console.error('Произошла ошибка при копировании:', err);
    });
    ```
4. Использование Transform потоков
    ```js 
    const { Transform } = require('stream');
    
    class UpperCaseTransform extends Transform {
        _transform(chunk, encoding, callback) {
            // Преобразуем данные в верхний регистр
            this.push(chunk.toString().toUpperCase());
            callback();
        }
    }
    
    const readStream = fs.createReadStream('large-file.txt');
    const writeStream = fs.createWriteStream('output-file.txt');
    
    const upperCaseStream = new UpperCaseTransform();
    
    readStream.pipe(upperCaseStream).pipe(writeStream);
    
    writeStream.on('finish', () => {
        console.log('Обработка завершена.');
    });
    ```
5. Использование Duplex поток
   ```js
    const fs = require('fs');
    const { Duplex } = require('stream');
    
    class MyDuplexStream extends Duplex {
        constructor(filePath) {
            super();
            this.filePath = filePath;
            this.readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
            this.writeStream = fs.createWriteStream(filePath, { flags: 'a' }); // 'a' - добавление, не перезапись
        }
    
        _read(size) {
            // Читаем данные из файла
            this.readStream.on('data', (chunk) => {
                this.push(chunk); // Отправляем данные в дуплексный поток
            });
    
            this.readStream.on('end', () => {
                this.push(null); // Завершаем поток, когда данные закончились
            });
        }
    
        _write(chunk, encoding, callback) {
            // Записываем данные в файл
            this.writeStream.write(chunk, encoding, (err) => {
                if (err) {
                    callback(err);
                } else {
                    console.log('Данные записаны:', chunk.toString());
                    callback(); // Завершаем операцию записи
                }
            });
        }
    
        // Закрываем потоки
        _final(callback) {
            this.writeStream.end(callback); // Завершаем поток записи
        }
    }
    
    // Используем дуплексный поток
    const duplexStream = new MyDuplexStream('test-1.txt');
    
    // Читаем данные из дуплексного потока
    duplexStream.on('data', (chunk) => {
        console.log('Прочитано из потока:', chunk.toString());
    });
    
    // Записываем данные в дуплексный поток
    duplexStream.write('Hello from Duplex Stream!\n');
    duplexStream.write('Another line.\n');
    
    // Закрываем поток, когда все записи завершены
    duplexStream.end();
   ```

### Можно ли использовать Transform внутри Duplex потока или это избыточно?
Да, можно использовать Transform внутри Duplex потока, и в некоторых случаях это может быть вполне оправданным решением, 
хотя это и может показаться избыточным. Давайте рассмотрим, когда и почему это может быть полезно.

- Когда использовать Transform внутри Duplex?
    1. Чистота кода: Если логика обработки данных довольно сложная или многослойная, использование отдельного 
Transform потока может сделать код более организованным и читаемым. Это позволяет разделить логику обработки данных 
от основной логики потока.
    2. Повторное использование: Если вы планируете использовать логику преобразования в нескольких местах, 
лучше создать отдельный Transform поток, чтобы избежать дублирования кода. Это улучшает поддерживаемость и тестируемость.
    3. Композиция потоков: Node.js поддерживает композицию потоков, что позволяет вам легко комбинировать 
различные типы потоков. Если вы хотите, чтобы данные прошли через несколько шагов обработки, использование 
Transform в Duplex может сделать это более удобным.

Пример использования Transform внутри Duplex
```js
const { Duplex, Transform } = require('stream');

// Преобразование данных в верхний регистр
class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

// Дуплексный поток, который использует Transform
class MyDuplexStream extends Duplex {
  constructor() {
    super();
    this.transformStream = new UpperCaseTransform(); // Создаем экземпляр Transform
  }

  _read(size) {
    // Читаем данные из какого-либо источника
  }

  _write(chunk, encoding, callback) {
    // Обрабатываем данные через Transform
    this.transformStream.write(chunk, encoding, (err) => {
      if (err) return callback(err);
      // Получаем обработанные данные и передаем их дальше
      this.transformStream.on('data', (transformedChunk) => {
        this.push(transformedChunk); // Отправляем преобразованные данные
      });
      callback();
    });
  }

  // Закрываем потоки
  _final(callback) {
    this.transformStream.end(callback);
  }
}

// Использование дуплексного потока
const duplexStream = new MyDuplexStream();
duplexStream.on('data', (data) => {
  console.log('Processed:', data.toString());
});

// Записываем данные в дуплексный поток
duplexStream.write('hello ');
duplexStream.write('world!');
duplexStream.end();
```