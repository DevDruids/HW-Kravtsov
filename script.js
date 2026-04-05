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