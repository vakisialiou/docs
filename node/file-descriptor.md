[Назад](../README.md)

### Что такое файловый дескриптор?
- **Файловый дескриптор** — это просто число (целое число), которое операционная система использует для идентификации 
открытого файла или другого ресурса (например, сокета).
- Он позволяет твоему приложению взаимодействовать с файлами, не указывая при этом сам путь к файлу каждый раз.

### Как работает файловый дескриптор?
- Открытие файла:
    - Когда ты открываешь файл в своей программе, операционная система создаёт запись о нём и возвращает тебе 
числовой дескриптор.
    - Это число будет использоваться для всех последующих операций с этим файлом (чтение, запись и т.д.).

### Потенциальные проблемы в случае если не закрывать дескриптор.
1. Утечка ресурсов:
    - Открытые файловые дескрипторы занимают ресурсы в операционной системе. Если программа постоянно 
завершалась с ошибками, это может привести к утечкам дескрипторов, что в конечном итоге может исчерпать лимит 
на количество открытых файлов, доступных для программы.
2. Непредсказуемое поведение:
   - Если файловый дескриптор не был закрыт, это может привести к непредсказуемому поведению 
в будущих запусках программы. Например, файл может оставаться в блокированном состоянии или в состоянии, 
когда с ним нельзя работать.
3. Проблемы с целостностью данных:
   - Если файл был открыт для записи и программа завершилась с ошибкой, данные могут быть повреждены, 
если они не были корректно записаны.

### Как избежать проблем.
1. Используйте обработку ошибок:
   - Всегда старайтесь обрабатывать возможные ошибки в вашей программе, особенно при работе с файловыми операциями. 
Например, если возникает ошибка, убедитесь, что вы закрываете все открытые файловые дескрипторы в блоке catch или 
в обработчике ошибок.
2. Используйте try...finally:
   - Если вы используете синхронные операции, можно использовать блоки try...finally, чтобы гарантировать закрытие 
файлового дескриптора, даже если возникла ошибка.
3. Обработка завершения программы:
   -  Можно также установить обработчики для событий завершения программы, таких как process.on('exit', ...) или 
process.on('uncaughtException', ...), чтобы гарантировать, что все файловые дескрипторы будут закрыты.

```js
const fs = require('fs');

let fd;

process.on('exit', () => {
  if (fd !== undefined) {
    fs.closeSync(fd); // Закрываем, если файл остался открытым
    console.log('Файл успешно закрыт при завершении программы');
  }
});

try {
  fd = fs.openSync('example.txt', 'r');
  // Код для работы с файлом...
  throw new Error('Ошибка!'); // Искусственно вызываем ошибку
} catch (error) {
  console.error('Ошибка:', error);
}
```