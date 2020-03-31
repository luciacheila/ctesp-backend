function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.age = age;
}
//adicionar função ao prototype
Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + " " + this.age);
}

//adicionar atributo ao prototipo
Person.prototype.age = 0;

var john = new Person("Cheila", "Pedra");
john.age = 19;
var mary = new Person("Maria", "Paula");
mary.age = 23;


console.log(john.age);
console.log(mary.age);
john.greet();

console.log(john.__proto__);
console.log(mary.__proto__);

console.log(john.__proto__ == mary.__proto__);
console.log(john.firstName == mary.__proto__);