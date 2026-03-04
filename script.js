// 1. Запишіть число 5 600 000 у вигляді з використанням e.
// Запишіть число 0.000078 у вигляді з використанням e.
// Обчисліть : 250e3 + 4e2

const n1 = 5.6e6;
const n2 = 78e-6;
const sum = 250e3 + 4e2;

// 2. Різні системи числення
// Перетворіть число 238:
// у шістнадцятковій системі
// у двійковій системі
// у вісімковій системі

const n3 = 238;

n3.toString(16);
n3.toString(2);
n3.toString(8);

// 3. За допомогою parseInt перетворіть:
// "111" з base 2
// "ff" з base 16
// "77" з base 8

const s1 = "111";
const s2 = "ff";
const s3 = "77";

parseInt(s1, 2);
parseInt(s2, 16);
parseInt(s3, 8);

// 4. Напишіть приклад, де:
// isNaN повертає true
// Number.isNaN повертає false

const s4 = "555";
const s5 = "hello";

const isTrue1 = isNaN(s4);
const isTrue2 = isNaN(s5);

// 5. Перетворіть у число:


// "12px"
// "100.5em"
// "45.67.89"

// Чому Number("12px") повертає інший результат, ніж parseInt("12px")?

const s6 = "12px";
const s7 = "100.5em";
const s8 = "45.67.89";

// console.log(Number(s6))
// console.log(Number(s7))
// console.log(Number(s8))

parseInt(s6)
parseInt(s7)
parseInt(s8)


// parseInt преобразовует в число до первого символа, не числа, а Number - целиком


// 6. Округліть -3.4 за допомогою:
// Math.floor
// Math.ceil
// Math.trunc
// За допомогою toFixed(2) зробіть число 12.34567 з двома знаками після коми.

const n4 = -3.4;
const n5 = 12.34567;

Math.floor(n4);
Math.ceil(n4);
Math.trunc(n4);
n5.toFixed(2);



// 7. Створіть програму-калькулятор конвертації:

// Користувач вводить число.

// Програма:
// перевіряє, чи це коректне число
// виводить його у двійковій системі
// виводить його у шістнадцятковій системі
// округлює до 2 знаків після коми
// перевіряє, чи є число скінченним

const inputNumber = 5e55;

function calculatorConvertation(num){
    if(!isNaN(num)){
        console.log(`Двійкова - ${num.toString(2)}`)
        console.log(`Шістнадцяткова - ${num.toString(16)}`)
        console.log(`Округлене - ${num.toFixed(2)}`)
        console.log(`Скінченне чи ні - ${isFinite(num)}`)
    }
}

calculatorConvertation(inputNumber)