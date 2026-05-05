class Person {
  public name: string;
  public age: number;
  public address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSllep(numberOfOut: number) {
    console.log(`${this.name} gumay eto ghonta ${numberOfOut}`);
  }
}

class Students extends Person {}

const student = new Students("sinsn", 21, "rangpur");
student.getSllep(10);

class Teacher extends Person {
  public destination: string;

  constructor(name: string, age: number, address: string, destination: string) {
    super(name, age, address);
    this.destination = destination;
  }
}

const teacher = new Teacher("sinsn", 21, "rangpur", "senior");
teacher.address
