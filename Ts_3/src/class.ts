// oop class

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
}

const dog = new Animal("deshi dog", "dog", "gew ghew");
class Animal2 {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog2 = new Animal2("deshi dog", "dog", "gew ghew");

dog2.makeSound();

// paramiter properties

class Animal3 {
  //   name: string;
  //   species: string;
  //   sound: string;

  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog3 = new Animal2("deshi dog", "dog", "gew ghew");

dog2.makeSound();
