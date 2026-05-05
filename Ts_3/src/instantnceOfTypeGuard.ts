// oop :instance of type guard/ type narrwing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  selep(numberOfOur: number) {
    console.log(`${this.name} doinik ${numberOfOur} gumay `);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numberOfOur: number) {
    console.log(`${this.name} doinik ${numberOfOur} porasuna kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClss(numberOfOur: number) {
    console.log(`${this.name} doinik ${numberOfOur} porasuna koray`);
  }
}

const getUserInfo = (user: Person) => {
  if (user instanceof Student) {
    user.doStudy(8);
  } else if (user instanceof Teacher) {
    user.takeClss(5);
  } else {
    user.selep(10);
  }
};

const student1 = new Student("mr.student");
const teacher1 = new Teacher("mr.techar");

getUserInfo(student1);

// funtion guard // class ke type hisebe use kora jay

const isStundent = (user: Person) => {
    return user instanceof Student // user is teacher
};

const isTeacher=(user:Person)=>{
    return user instanceof Teacher;//user is teacher
}
