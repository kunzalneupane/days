{
    // Object Constructor
    const car = new Object();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2021;
    console.log(car);
    document.getElementById("result").innerHTML = car.brand;  
}
 
{
    //Object.create()
    const proto = { greet: () => console.log("Hi") };
const newObj = Object.create(proto);
newObj.greet(); 
    document.getElementById("result2").innerHTML = "Hello World!";

}
{
    // ES6 Classes
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    }
    const myCar = new Car("Toyota", "Corolla", 2021);
    console.log(myCar.brand);
    document.getElementById("classes").innerHTML = myCar.brand;
    
}
{
    //using function as constructor
    
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    }
const myCar = new Car("Toyota", "Corolla", 2021);
    console.log(myCar.model);
    document.getElementById("last").innerHTML = myCar.model;

}