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
