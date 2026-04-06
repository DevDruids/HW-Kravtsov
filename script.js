// 1. const a = [1, 1, 2, 3, 3, 7];
// тільки повторювані [1, 3]

const a = [1, 1, 2, 3, 3, 7];
const b = new Set(a);

// Функція, що приймає масив, і перевіряє, чи всі елементи унікальні

function isElsUnique(arr){
  return new Set(arr).size === arr.length 
}

const arr1 = [1, 3, 4, 5]

console.log(isElsUnique(arr1))


// const arr = [1, 2, 2, 3, 4, 4, 5]; тільки елементи, що повторюються 1 раз => [1, 3, 5]

const arr = [1, 2, 2, 3, 4, 4, 5];
const set = new Set(arr)

const result = Array.from(set).filter(el => {
  return arr.indexOf(el) === arr.lastIndexOf(el);
});

console.log(result);


const set1 = new Set();
set.add([1,2]);
set.add([1,2]);
console.log(set1)
console.log(set1.size === 1);

// false, бо Set порівнює не значення, а посилання, тому додає обидва масива


// 1. Запитайте n
// Створіть масив з n натуральних елементів від 1 до 10
// reduce його. в результаті отримаємо 
// {
// odd: 2, 
// even: 8
// }


const n = Number(prompt("Введіть кількість елементів"));

const arr2 = Array.from({ length: n }, () => Math.floor(Math.random() * 10) + 1);

console.log("Масив:", arr);

const result1 = arr.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even++;
  } else {
    acc.odd++;
  }
  return acc;
}, { odd: 0, even: 0 });

console.log(result1);

// 2.
// const users = [
//   { login: "user_1", age: 12 },
//   { login: "devMax", age: 19 },
//   { login: "codeMaster", age: 17 },
//   { login: "frontend_guy", age: 22 },
//   { login: "backend_pro", age: 16 },
//   { login: "jsNinja", age: 27 },
//   { login: "reactFan", age: 14 },
//   { login: "nodeHero", age: 31 },
//   { login: "fullstack_dev", age: 18 },
//   { login: "testerQA", age: 15 }
// ];
//       - додайте всім по 1 року (дослідити)
//       - створіть масив reduce з логінів повнолітніх

// const n = Number(prompt("Введіть кількість елементів"));

// const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10) + 1);

// console.log("Масив:", arr);

// const result = arr.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.even++;
//   } else {
//     acc.odd++;
//   }
//   return acc;
// }, { odd: 0, even: 0 });

// console.log(result);