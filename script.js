function Car(autoBrand, wheelDrive, speed=0){
  this.speed = speed;
  this.autoBrand = autoBrand;
  this.wheelDrive = wheelDrive;

  this.showSpeed = function(){
    console.log(this.speed);
    return this;
  }

  this.accelerate = function(deltaSpeed){
    this.speed += deltaSpeed;
    return this;
  }
}

const cars = [
  new Car('BMW', 'задній'),
  new Car('Audi', 'повний'),
  new Car('Toyota', 'передній'),
  new Car('Subaru', 'повний'),
  new Car('Mercedes', 'задній')
]

console.log(cars[0].showSpeed().accelerate(15).accelerate(30).showSpeed())