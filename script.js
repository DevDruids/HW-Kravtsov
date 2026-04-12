// 1. const arr = [5, 10, 15];
// Отримай через деструктуризацію змінні first і second.

const arr = [5, 10, 15];

[first, second] = arr;

// 2. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25
// };
// Дістань name в змінну userName.

const user = {
  name: "Ivan",
  age: 25
};

let {name: userName} = user;

// 3. Є масив:
// const arr = [1, 2, 3, 4];

// Отримай:

// first — перший елемент
// others — масив з решти елементів

const arr1 = [1, 2, 3, 4];

[first, ...others] = arr1;


// 4. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25,
//   city: "Dnipro"
// };

// Отримай:
// змінну name
// об’єкт rest (всі інші властивості без name)

const user1 = {
  name: "Ivan",
  age: 25,
  city: "Dnipro"
};

let {name, ...restUser} = user1;

// 5. Є масиви:
// const a = [1, 2];
// const b = [3, 4];

// Об’єднай їх в один масив [1, 2, 3, 4].

const a = [1, 2];
const b = [3, 4];

const newArr = [...a, ...b];


// 6. Є об’єкт:
// const user = { name: "Ivan" };
// Створи копію об’єкта (не посилання).

const user2 = {name: "Ivan"};
const newUser = {...user2}

// 7. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25,
//   city: "Dnipro"
// };

// Створи новий об’єкт:
// без city
// додай country: "Ukraine"

const user3 = {
  name3: "Ivan",
  age3: 25,
  city: "Dnipro"
};

let {city, ...rest} = user3;

const newUser1 = {
  ...rest,
  country: "Ukraine"
}


// 8. Є масив:
// const arr = [1, 2, 3];

// Створи новий масив:
// додай 0 на початок
// додай 4 в кінець

const arr3 = [1, 2, 3];
const newArr2 = [0, ...arr, 4];

// 9. Є об’єкт:
// const user = {
//   name: "Ivan",
//   address: {
//     city: "Dnipro"
//   }
// };
// Дістань значення city через деструктуризацію.

const user4 = {
  name: "Ivan",
  address: {
    city: "Dnipro"
  }
};

const {address: { city: userCity }} = user4

// 10. Є код:
// const a = [1, 2, 3];
// const b = a;

// Зроби так, щоб b була копією масиву, а не посиланням.

const a1 = [1, 2, 3];
const b1 = [...a1];

// 11. Є об’єкт:
// const user = {
//   name: "Ivan",
//   age: 25
// };

// Напиши функцію:
// function updateUser(user) {
  // додати isAdmin: true
// }
// Не змінюй оригінальний об’єкт.

const user5 = {
  name: "Ivan",
  age: 25
};

function updateUser(user){
  const newUser = {
    ...user,
    isAdmin: true
  }

  return newUser
}

// 12. Є масив:
// const arr = [1, 2, 3, 4, 5];
// Через деструктуризацію отримай:
// перший елемент
// останній елемент

const arr5 = [1, 2, 3, 4, 5];
const [first2, ...rest2] = arr5;
const [first3, , , , last2] = arr5
const last = rest2[rest2.length - 1]