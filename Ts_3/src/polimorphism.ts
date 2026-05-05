// polymorphism :bohurupi /// method er shathe connection

class Person {
  getSleep() {
    console.log(`i normal  slepp for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(` i am  a student i sleep 7hours`);
  }
}

class NextLevel extends Person {
  getSleep() {
    console.log(` i am  a next level devoloper i sleep 6hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevel();

getSleepingHours(person3);

// exmple
class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
    radius:number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Ractangle extends Shape {
  // area= height*width;
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};
const shape = new Shape();
const shape2 = new Circle(10);
const shape3 = new Ractangle(4, 4);

getArea(shape3);
