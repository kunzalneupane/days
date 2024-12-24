class Parent {
    //cass constructor
    constructor(name) {
        this.name = name; // Initialize name property
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}
//class extends
class Child extends Parent {
    constructor(name, age) {
        //super
        super(name); 
        this.age = age; 
    }

    introduce() {
        return `${super.greet()} I am ${this.age} years old.`;
    }
}

const child = new Child("kunjal", 20);
console.log(child.greet()); 
console.log(child.introduce()); 
