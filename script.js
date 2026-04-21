const field = document.querySelector('.field');
const square = document.querySelector('.square')

let interval = false;
let step = 0

field.addEventListener('mouseenter', () => {
  interval = setInterval(() => {
    if(step === 0){
      square.style.transform = 'translate(400px, 0)';
    }else if(step === 1){
      square.style.transform = 'translate(400px, 400px)';
    }else if(step === 2){
      square.style.transform = 'translate(0, 400px)';
    }else if(step === 3){
      square.style.transform = 'translate(0, 0)';
    } 

    step++;

    if(step > 3){
      step = 0;
    };

  }, 1000);
})

field.addEventListener('mouseleave', () => {
  clearInterval(interval);
})