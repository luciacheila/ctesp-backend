function calculateIMC(weight, height) {
    var imc = weight / (height * height);
    if (imc > 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("peso normal");
    }
}

//invocação
calculateIMC(80, 1.8);

function reverseStr(str) {
    var splitted = str.split(" ");
    var inverted = "";
    splitted.forEach(item => {

        for (let i = item.length - 1; i >= 0; i--) {
            inverted += item[i];
        }
        inverted += "";
    });
    console.log(inverted);
}
reverseStr(" Hoje e Domingo");

function countVogals(str) {
    var count = 0;
    var vogals = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vogals.length; j++) {
            if (str[i] == vogals[j]) {
                count++;
            }

        }
    }
    return count;
}
var count = countVogals("Hello");
console.log("Count:" + count);

//exercicio4











////exercicio5
function calculateWorkTime(entry, exit) {
    var entryT = entry.getTime();
    var exitT = exit.getTime();

    var miliseconds = (exitT - entry) / 1000;
    var sec = (miliseconds) % 60;
    var min = (miliseconds / 60) % 60;
    var hours = (miliseconds / 3600) % 60;

    console.log("H:" + hours + "M:" + min + "S:" + sec);
}

var entry = new Date("October 13,2019 08:08:08");
var exit = new Date("October 13,2019 09:12:00");

calculateWorkTime(entry, exit);

function drawRectangle(weight, height) {
    var ast = '*';
    var line = "";
    for (let i = 0; i < 5; i++) {
        line += ast;

    }
    for (let j = 0; j < height; j++) {
        console.log(line);
    }
    console.log(line);
}
drawRectangle(5, 10);



///exercicio9
//Declaraçã e inicialização de objetos
var std1 = { name = "Test", number: 1, grade: 12 };
var std1 = { name = "Test1", number: 2, grade: 2 };
var std1 = { name = "Test2", number: 3, grade: 19 };
var std1 = { name = "Test3", number: 4, grade: 10 };
//cDeclaração e inicialização de um array vazio
var students = [];
//adicionar um objeto  ao array
students.push(std1);
students.push(std2);
students.push(std3);
students.push(std4);
console.log(students);

function listGrades(array) {
    array.forEach(item => {
        console.log(item);
    });

}
listGrades(students);

function showBestGrade(array) {
    var grade = array[0].grade;
    array.forEach(element => {
        console.log(item);
    });
}
var bestGrade = a