   function calculateFinalGrade(praticalGrade,theoreticalGrade){

    var finalGrade=(praticalGrade+theoreticalGrade)/2;
    if(finalGrade>=9,5){
        return "Aprovou!A sua nota final é de "+finalGrade;
    }else{
        return "Reprovou!A sua nota final é de "+finalGrade;
    }
}
console.log(calculateFinalGrade(20,5));