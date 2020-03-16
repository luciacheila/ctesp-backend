   function calculateFinalGrade(praticalGrade, theoreticalGrade) {

       var finalGrade = (praticalGrade + theoreticalGrade) / 2;
       if (finalGrade >= 9, 5) {
           return "Aprovou!A sua nota final é de " + finalGrade;
       } else {
           return "Reprovou!A sua nota final é de " + finalGrade;
       }
   }

   //  console.log(calculateFinalGrade(20, 5));

   //console.log("TESTE");

   //ALÍNEA 6

   function monthByName(monthNumber) {
       switch (monthNumber) {
           case 1:
               console.log("January");
               break;
           case 2:
               console.log("February");
               break;
           case 3:
               console.log("January");
               break;
           case 4:
               console.log("February");
               break;
           default:
               console.log("N/A");
               break;
       }
   }
   // monthByName(1);

   function calculator(operand1, operand2, operator) {
       if (operator == '+') {
           console.log(operand1 + operand2);
       } else if (operator == '-') {
           console.log(operand1 - operand2);
       } else if (operator == ':') {
           console.log(operand1 / operand2);
       } else if (operator == 'x') {
           console.log(operand1 * operand2);
       }

   }

   // calculator(2, 2, '+');

   function multiplesOfFive(value) {
       for (let i = 1; i <= value; i++) {
           if (i % 5 == 0) {
               console.log(i);
           }
       }
   }

   //  multiplesOfFive(20);

   function sumOf(value) {
       var soma = 0;
       for (let i = 1; i <= value; i++) {
           soma = soma + i;
       }
       console.log(soma);


   }
   //sumOf(100);

   function calculateFact(value) {
       var fact = 1;
       for (let i = value; i <= 1; i--) {
           fact = fact * i;
       }
       // console.log(fact);
       return fact;
   }
   var f = calculateFact(3);
   console.log("f:" + f);

   var array = [1, 1, 3, -1, 1];

   function calculateAverage(array) {
       var sum = 0;
       var average = 0;
       for (let i = 0; i < array.length; i++) {
           sum = sum + array[i];

       }
       average = sum / array.length;
       return average;
   }
   var avg = calculateAverage(array);

   function getMax(array) {
       var max = array[0];
       for (let i = 1; i < array.length; i++) {

           if (array[i] > max) {
               max = array[i];
           }
       }
       return Max;
   }
   var max = getMax(array);
   console.log("Max:" + max);


   function getMin(array) {
       var min = array[0];
       for (let i = 1; i < array.length; i++) {

           if (array[i] < min) {
               min = array[i];
           }
       }
       return min;
   }
   var min = getMin(array);
   console.log("Min:" + min);