// Не доделано

const arra = [5, 4, 3, 2];
const arr2 = [5, 4, 3, 2];

function splicePoly(arr, start, deletedCount, item){
  if(arr){
    arr[start] = item;

    newArr = [];
    let temp = deletedCount - start

    for(let i = 0; i < temp; i++){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(splicePoly(arra, 1, 3, "Burger"))

arr2.splice(1, 2, "Burger")
console.log(arr2)




// Bubble sort

const arr3 = [4, 7, 1, 67, 48, 100, -2];

function bubleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}


const arrRofl = [2, 8, 1, 10, 5, 455];

function quickSort(arr){
  if(arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else(
      right.push(arr[i])
    );
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const temp = [...arrRofl];

console.log(...arrRofl)
console.log(typeof temp) // Я не розумію як тип розгорнутого масиву об'єкт????? 

// console.log(quickSort(arrRofl))
