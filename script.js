// 1. напишіть аналог(поліфіл) через for (функція) indexOf та lastIndexOf()

const arr1 = [1, 2, 3, 5, 3, 7, 9];

function indexOf(arr, inputNumber){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === inputNumber){
      return i
    }
  }
  return -1;
}

function lastIndexOf(arr, inputNumber){
  for(let i = arr.length; i >= 0; i--){
    if(arr[i] === inputNumber){
      return i
    }
  }
  return -1;
}


// 2. напишіть функцію, що порівнює масиви

const arr2 = [1, 2, 3, 5, 3, 7, 9];
const arr3 = [1, 2, 3, 5, 3, 4, 7];

function compareArrs(arr1, arr2){
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

// 3. напишіть функцію, що порівнює об'єкти ()***
// ремарка, в об'єктах та масивах примітиви !!!

let user1 = {
  name: "dfghj",
  age: 45,
};

let user2 = {
  name: "dfghj",
  age: 45,
};

function compareObjs(obj1, obj2){
  const entries1 = Object.entries(obj1).sort();
  const entries2 = Object.entries(obj2).sort();

  if(entries1.length !== entries2.length) return false;
  for(let i = 0; i < Object.entries(obj1).length; i++){
    if(entries1[i][1] !== entries2[i][1]) return false;
    // if(Array.isArray(entries1[i][1]) && Array.isArray(entries2[i][1])){
    //   if(!compareArrs(entries1[i][1], entries2[i][1])) return false;
    // }
  }

  return true;
}

// console.log(compareObjs(user1, user2))


// 4.const grades = {
//   math: [10, 9, 11, 10],
//   ukrainian: [11, 10, 12, 11],
//   english: [9, 8, 10, 9],
//   history: [8, 7, 9, 8],
//   physics: [10, 9, 10, 11],
//   chemistry: [7, 6, 8, 7],
//   biology: [9, 8, 10, 9],
//   geography: [8, 7, 9, 8],
//   informatics: [12, 11, 12, 12],
//   pe: [11, 10, 12, 11]
// };

// 4.1 Створіть новий об'єкт, де кожний предмет - це середнє всіх оцінок по ньому. округліть до десятих тільки
// 4.2 через body.

const grades = {
  math: [10, 9, 11, 10],
  ukrainian: [11, 10, 12, 11],
  english: [9, 8, 10, 9],
  history: [8, 7, 9, 8],
  physics: [10, 9, 10, 11],
  chemistry: [7, 6, 8, 7],
  biology: [9, 8, 10, 9],
  geography: [8, 7, 9, 8],
  informatics: [12, 11, 12, 12],
  pe: [11, 10, 12, 11]
};

const averageGrades = {}
const objEntries= Object.entries(grades);
const objKeys = Object.keys(grades);
const objValues = Object.values(grades);

for(let i = 0; i < objEntries.length; i++){
  let average = Math.round((objValues[i].reduce((average, el) => average + el) / objValues[i].length) * 10) / 10;
  averageGrades[objKeys[i]] = average; 
}

const averageGradeskeys = Object.keys(averageGrades);
const averageGradesEntries = Object.entries(averageGrades);

const p1 = document.querySelector('.para');

for(let i = 0; i < averageGradeskeys.length; i++){
  p1.insertAdjacentHTML(
    'beforeend',
    `<p><u>${averageGradeskeys[i]}</u>: <b>${averageGrades[averageGradeskeys[i]]}</b></p>`
  )
}

for(let [subject, mark] of averageGradesEntries){
  p1.insertAdjacentHTML(
    'beforeend',
    `<p><u>${subject}</u> -> <b>${mark}</b></p>`
  )
}

// insertAdjacentHTML('beforeend', 'тут створіть параграф')
// виведіть параграфи, де назва предмету підкреслена, середня оцінка жирним
// двома способами через кейз і через ентріз