const users = [
  { name: "Ivan", age: 18 },
  { name: "Anna", age: 25 },
  { name: "Oleg", age: 30 },
  { name: "Olena", age: 22 },
  { name: "Dmytro", age: 27 }
];

const newUsers = [...users];

function randomUserFunc(newUsers){
  if(newUsers.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * newUsers.length);
  const user = newUsers[randomIndex];

  newUsers.splice(randomIndex, 1);

  return user;
}

// console.log(randomUserFunc(newUsers))
// console.log(randomUserFunc(newUsers))
// console.log(randomUserFunc(newUsers))
// console.log(randomUserFunc(newUsers))
// console.log(randomUserFunc(newUsers))
// console.log(randomUserFunc(newUsers)) // null


// 2. sort()
// відсортувати users по імені

users.sort((a, b) => {
  if(a.name > b.name) return 1
  else if(a.name < b.name) return -1
  else return 0;
})

// 3. split/join()
// const str = "2026-03-18";
// отримати 
// 18.03.2026

const str = "2026-03-18";

str.split('-').reverse().join('.');

// 4. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
// всі букви 'o' замініть на $$$

const str1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

const splitedStr = str1.split('');

for(let i = 0; i < splitedStr.length; i++){
  if(splitedStr[i] === 'o'){
    splitedStr[i] = '$$$';
  }
}

splitedStr.join('')


// 5. reduce()
// const numbers = [5, 10, 15, 20];
// Обчислити суму непарних елементів

const numbers = [5, 10, 15, 20];

const sum = numbers.reduce((acc, a) => a % 2 !== 0 ? acc + a : acc)



// **6. reduce()
// const users = [
// { name: "Ivan", age: 18 },
// { name: "Anna", age: 25 },
// { name: "Oleg", age: 30 },
// { name: "Olena", age: 22 },
// { name: "Petro", age: 17 }
// ];

// редьюсом отримайте
// {
// adult: [
//  { name: "Ivan", age: 18 },
//  { name: "Anna", age: 25 },
//  { name: "Oleg", age: 30 },
//  { name: "Olena", age: 22 }
// ],
// minor: [
//  { name: "Petro", age: 17 }
// ]
// }

const users2 = [
  { name: "Ivan", age: 18 },
  { name: "Anna", age: 25 },
  { name: "Oleg", age: 30 },
  { name: "Olena", age: 22 },
  { name: "Petro", age: 17 }
];

const usersSorted = users2.reduce((a, ) => {
  if()
})