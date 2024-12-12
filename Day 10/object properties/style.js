//
{
    let person = {firstname : "kunjal" , lastname : "Neupane", age:  22};
    document.getElementById("name").innerHTML = person.firstname + person.age + "years old.";
    
}

//
{
    const person = {
        firstname : "Barsha" ,
         lastname : "kafle" ,
          age: 22
        };
        document.getElementById("result").innerHTML = person.firstname + person.lastname + " is " + person.age + " years old.";
}


{
    //
const person = {};


person.firstName = "Biruja";
person.lastName = "Gautam";
person.age = 20;

document.getElementById("demo").innerHTML =person.firstName + " is " + person.age + " years old.";
}



{
    //
   let person = new Object();


person.firstName = "samikshya";
person.lastName = "Dhamala";
person.age = 20;

document.getElementById("new").innerHTML =person.firstName + " is " + person.age + " years old.";
}
