// 3. Написати функцію, що приймає дату в ISO та повертає який це день тижня

const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

function receiveDayOfWeek(date){
  const dateISO = new Date(date);
  const index = dateISO.getDay();
  return days[index];
}

// 2. Написати функцію, що виводить вік людини. в неї передаємо ISOчас
// 2.1* 3 роки, 7 років, 21 рік ....

const testISO = "2009-03-12T10:00:00.000Z";

function ageFromISO(dateISO2){
  const dateObject = new Date(dateISO2);
  const dateNow = new Date();

  let age = dateNow.getFullYear() - dateObject.getFullYear();

  if (dateNow.getMonth() < dateObject.getMonth() || (dateNow.getMonth() === dateObject.getMonth() && dateNow.getDate() < dateObject.getDate())
  ) {
    age--;
  }

  return age;
}

console.log(ageFromISO(testISO))

// У вас номер білету з 6 цифр. Виведіть всі щасливі, порахуйте їх кількість та скажіть, з якою ймовірністю нам випаде щасливий квиток (кількість щасливих / заг кількість)

