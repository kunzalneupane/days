//declaring class
class Car {
    //constructor method
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  //creating instance ( object)  of class
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  const myCar3 = new Car("EVs", 2020);
  
  document.getElementById("result").innerHTML =
  myCar1.name + " " + myCar2.name + " " + myCar3.name + myCar1.year;