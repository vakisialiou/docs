// console.log('1');
//
// setTimeout(() => console.log('2'), 0);
//
// Promise.resolve().then(() => {
//   console.log('3');
//   return Promise.resolve();
// }).then(() => console.log('4'));
//
// process.nextTick(() => console.log('5'));
//
// console.log('6');

// `1, 6, 5, 3, 4, 2`

console.log('start');

setTimeout(() => {
  console.log('setTimeout');

  queueMicrotask(() => {
    console.log('Timeout: queueMicrotask')
  })

  Promise.resolve().then(() => {
    console.log('Timeout: Promise.resolve 1')
  });

  process.nextTick(() => {
    console.log('Timeout: nextTick inside setTimeout 1');
  });

  Promise.resolve().then(() => {
    console.log('Timeout: Promise.resolve 2')
  });

  process.nextTick(() => {
    console.log('Timeout: nextTick inside setTimeout 2');
  });
}, 0)

setImmediate(() => {
  console.log('setImmediate');

  queueMicrotask(() => {
    console.log('Immediate: queueMicrotask')
  })

  Promise.resolve().then(() => {
    console.log('Immediate: Promise.resolve 1')
  });

  process.nextTick(() => {
    console.log('Immediate: nextTick inside setTimeout 1');
  });

  Promise.resolve().then(() => {
    console.log('Immediate: Promise.resolve 2')
  });

  process.nextTick(() => {
    console.log('Immediate: nextTick inside setTimeout 2');
  });
})

process.nextTick(() => {
  console.log('nextTick');
});

console.log('end');
