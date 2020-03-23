function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Acima do peso");
    } else if (imc > 30) {
        console.log("Obeso");
    }
}
calculaIMC(80, 1.70);

function fraseInversa(str) {
    var splitted = str.split(" ");
    var invertida = "";

    splitted.forEach(item => {
        for (let i = item.length - 1; i >= 0; i--) {
            invertida += item[i];
        }
        invertida += " ";
    });
    console.log(invertida)
    return invertida;
}
fraseInversa("Hoje e Domingo");

function countVogals(str) {
    var count = 0;
    var vogals = ['a', 'e', 'i', 'o', 'u'];
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

function countLetter(word, letter) {
    var count = 0;
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count++;
        }

    }
    console.log("A letra " + letter + " ocorre: " + count + " vezes.");
}
countLetter("HeLlo", "l");


function calculateWorkTime(entry, exit) {
    //coverte a data para milisegundos desde 1970
    var entryT = entry.getTime();
    var exitT = exit.getTime();

    var miliseconds = (exitT - entry) / 1000;
    var sec = (miliseconds) % 60;
    var min = (miliseconds / 60) % 60;
    var hours = (miliseconds / 3600) % 24;

    console.log("H:" + hours + "M:" + min + "S:" + sec);
}

var entry = new Date("October 13, 2019 08:00:00");
var exit = new Date("October 13, 2019 09:00:00");

calculateWorkTime(entry, exit);

function drawRectangle(width, height) {
    var line = "";
    var ast = "*";
    for (let i = 0; i < width; i++) {
        line += ast;
    }

    for (let j = 0; j < height; j++) {
        console.log(line);
    }

}

drawRectangle(20, 10);

function drawTriangle(height) {
    var line = "";
    var ast = "*";

    for (let j = 0; j < height; j++) {
        line += ast;
        console.log(line);
    }

}

drawTriangle(10);

function drawSquareBox(rows) {
    var line = "";
    var ast = "*";
    var space = " ";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows; j++) {
            if (i == 1 || i == rows || j == 1 || j == rows) {
                line += ast;
            } else {
                line += space;
            }
        }
        console.log(line);
        line = "";
    }

}
drawSquareBox(10);

// Declaração e inicialização de objetos
var std1 = { name: "Test", number: 1, grade: 12 };
var std2 = { name: "Test1", number: 2, grade: 2 };
var std3 = { name: "Test2", number: 3, grade: 19 };
var std4 = { name: "Test3", number: 4, grade: 10 };
// Declaração e inicialização de um array vazio
var students = [];
// Adicionar um objeto ao array
students.push(std1);
students.push(std2);
students.push(std3);
students.push(std4);
console.log(students);

function listGrades(array) {
    array.forEach(item => {
        console.log(item.grade);
    });
}
listGrades(students);

function showBestGrade(array) {
    var grade = array[0].grade;
    array.forEach(element => {
        if (element.grade > grade) {
            grade = element.grade;
        }
    });
    return grade;
}

var bestGrade = showBestGrade(students);
console.log("A melhor nota foi: " + bestGrade);

showBestGrade(students);

function showWorstGrade(array) {
    var grade = array[0].grade;
    array.forEach(element => {
        if (element.grade < grade) {
            grade = element.grade;
        }
    });
    return grade;
}

var worstGrade = showWorstGrade(students);
console.log("A pior nota foi: " + worstGrade);

showWorstGrade(students);

function calcAverageGrade(array) {
    var sum = 0;
    var average = 0;
    array.forEach(element => {
        sum = sum + element.grade;
    });
    average = sum / array.length;

    var lowestDifference = Math.abs(average - students[0].grade);
    var studentNumber = 0;
    var studentGrade = 0;

    students.forEach(element => {
        if (Math.abs(average - element.grade) < lowestDifference) {
            studentNumber = element.number;
            studentGrade = element.grade;
        }
    });

    console.log("O aluno com nota mais próxima da media é o nr: " + studentNumber + " e teve a nota: " + studentGrade);

}

calcAverageGrade(students);

function calcFailedGrades(array) {
    var count = 0;
    array.forEach(element => {
        if (element.grade < 9.5) {
            count++;
        }
    });
    return count;

}

var failedGradesCount = calcFailedGrades(students);
console.log("Total de notas negativas: " + failedGradesCount);


function calcPassedGrades(array) {
    var count = 0;
    array.forEach(element => {
        if (element.grade > 9.5) {
            count++;
        }
    });
    return count;

}

var passedGradesCount = calcPassedGrades(students);
console.log("Total de notas positivas: " + passedGradesCount);