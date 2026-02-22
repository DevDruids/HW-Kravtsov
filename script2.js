// 1.  За допомогою циклу перевірте справедливість рандому (на 1000 циклів)
// let turn = Math.round(Math.random());
// console.log(turn)

let zero = 0;
let one = 0;

for (let i = 0; i < 1000; i++) {
  let turn = Math.round(Math.random());

  if (turn === 0) zero++;
  else one++;
}

console.log("Кількість 0:", zero);
console.log("Кількість 1:", one);