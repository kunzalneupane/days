class Person {
    #name;
    constructor(name) {
      this.#name = name;
    }
    getName() {
      return this.#name;
    }
    setName(name) {
      this.#name = name;
    }
  }
  
  const person = new Person("kunjal");
  console.log(person.getName()); 
  person.setName("kunzal");
  console.log(person.getName()); 
  