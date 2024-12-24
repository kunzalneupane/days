class Person {
    name;          // Public field
    #age;          // Private field
  
    constructor(name, age) {
      this.name = name;   
      this.#age = age;    
    }
  
    get age() {           // Getter for private field
      return this.#age;
    }
  
    set age(newAge) {     // Setter for private field
      if (newAge > 0) this.#age = newAge;
      else console.error("Age must be positive.");
    }
  }
  
  const person = new Person("kunjal", 30);
  console.log(person.name);  
  console.log(person.age);   
  
  person.age = 35;           
  console.log(person.age);   
  person.age = -5;
  
           
  