class Students {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfOur: number) {
    console.log(`${this.name} eto ghorta gumay ${numberOfOur}`);
  }
}

const students = new Students("sinan", 18, "Rangpur");

students.getSleep(15);

//

class Teacher {
  name: string;
  age: number;
  address: string;
  designation: string; //extraproperty

  constructor(name: string, age: number, address: string, designation: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation = designation;
  }

  getSleep(numberOfOur: number) {
    console.log(`${this.name} eto ghorta gumay ${numberOfOur}`);
  }

  takeClass(numberOfClass:number) {
    console.log(`${this.name} eto  gonta class nei ${numberOfClass}`);
  }
}

const teacher = new Teacher("Teacher", 25, "bangladesh", "senior teacher");

teacher.takeClass(10)
