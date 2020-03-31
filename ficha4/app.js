var Config = require("./config");

var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("LOGIN", function() {
    console.log("Welcome user teste");
});
emtr.on(Config.LOGIN, function() {
    console.log("Welcome user");
});

emtr.emit("LOGIN");

var person = {
    name: "Cheila",
    age: 19,
    gender: "F"
};


console.log("Name:" + person.name);
var string_json = JSON.stringify(person);
console.log(string_json);

var str = JSON.parse('{"name":"Cheila","age":19,"gender":"F"}');

console.log("Name:" + str.name);
console.log("Age:" + str.age);
console.log("Gender:" + str.gender);

str.age = 222;

console.log("Name:" + str.name)