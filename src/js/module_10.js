//! TASK1
//* Реалізуй таймер зворотного відліку від 10 до 1.

// Після завершення виведи:

// Старт!

// let counter = 10;
// const timerId = setInterval(() => {
//   console.log(counter);
//   counter -= 1;
//   if (counter === 0) {
//     console.log('Старт');
//     clearInterval(timerId);
//   }
// }, 1000);

//! TASK2

//* Створи цифровий годинник, який щосекунди виводить поточний час у форматі:

// 14:35:08
// 14:35:09
// 14:35:10

// const timerId = setInterval(() => {
//   const time = new Date();
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

//! TASK3

// Є масив:

// [10, 20, 30, 40]

// Виводь елементи по одному через кожну секунду.

// Наступний елемент повинен починати оброблятися тільки після попереднього.

// const array = [10, 20, 30, 40];

// let index = 0;

// const timerId = setInterval(() => {
//   if (index < array.length) {
//     console.log(array[index]);
//     index += 1;
//   } else {
//     clearInterval(timerId);
//   }
// }, 1000);

//! module 10_2
//! TASK4
// Створи Promise, який повертає число 10

// const promise = new Promise((resolve, reject) => {
//   resolve(10);
// });
// promise.then(result => console.log(result));

//! TASK5
// const promise = new Promise((resolve, reject) => {
//   resolve('Hello');
// });
// promise.then(console.log);
//! TASK6
// const number = 10;
// const promise = new Promise((resolve, reject) => {
//   resolve(number);
// });

// promise
//   .then(value => {
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//   });
//! TASK7
// function logString(ms, string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(string);
//     }, ms);
//   });
// }

// logString(5000, 'abc212').then(result => {
//   console.log(result);
// });

//! TASK8

// const promise1 = Promise.resolve(5);
// const promise2 = Promise.resolve('r32r32');
// const promise3 = Promise.resolve({ key1: '13e213' });

// const result = Promise.all([promise1, promise2, promise3]);

// result
//   .then(result => {
//     console.log(result);
//   })
//   .catch(result => {
//     console.log(result);
//   });

//! TASK9

// const tasks = [
//   () => {
//     return Promise.resolve(4);
//   },
//   () => {
//     return Promise.resolve('hello');
//   },
//   () => {
//     return Promise.resolve({ key: 'OK' });
//   },
// ];

// for (const task of tasks) {
//   task().then(result => {
//     console.log(result);
//   });
// }

//! TASK10

// varian1 work without reject

// const promise1 = Promise.resolve(5);
// const promise2 = Promise.resolve('r32r32');
// const promise3 = Promise.resolve({ key1: '13e213' });

// function myAll(array) {
//   const resultArray = [];
//   for (const promise of array) {
//     promise.then(result => {
//       resultArray.push(result);
//     });
//   }

//   return new Promise((resolve, reject) => {
//     resolve(resultArray);
//   });
// }

// myAll([promise1, promise2, promise3]).then(result => console.log(result));

// variant2

// const promise1 = Promise.resolve(5);
// const promise2 = Promise.reject('r32r32');
// const promise3 = Promise.resolve({ key1: '13e213' });

// function myAll(array) {
//   const resolveArray = [];
//   let rejectValue = null;
//   for (const promise of array) {
//     if ((promise.state = 'fulfilled')) {
//       promise.then(result => {
//         resolveArray.push(result);
//       });
//     } else {
//       promise.catch(result => {
//         rejectValue = result;
//       });
//     }
//   }

//   return new Promise((resolve, reject) => {
//     if (rejectValue === null) {
//       resolve(resolveArray);
//     } else {
//       reject(rejectValue);
//     }
//   });
// }

// myAll([promise1, promise2, promise3])
//   .then(result => console.log(result))
//   .catch(result => console.log(result));

// variant 3

// const promise1 = Promise.resolve(5);
// const promise2 = Promise.reject('r32r32');
// const promise3 = Promise.resolve({ key1: '13e213' });

// function myAll(array) {
//   const resolveArray = [];
//   const rejectArray = [];
//   for (const promise of array) {
//     promise
//       .then(result => {
//         resolveArray.push(result);
//       })
//       .catch(error => {
//         rejectArray.push(error);
//       });
//   }

//   return new Promise((resolve, reject) => {});
// }

// myAll([promise1, promise2, promise3])
//   .then(result => console.log(result))
//   .catch(result => console.log(result));

//!!!!!!!!!! variant4

const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve('r32r32');
const promise3 = Promise.resolve({ key1: '13e213' });

function myAll(array) {
  const resultArray = [];
  const rejectedArray = [];
  for (const promise of array) {
    promise
      .then(result => {
        resultArray.push(result);
      })
      .catch(result => rejectedArray.push(result));
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectedArray[0] === undefined) {
        resolve(resultArray);
      } else {
        reject(rejectedArray[0]);
      }
    }, 0);
  });
}

myAll([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(result => console.log(result));
