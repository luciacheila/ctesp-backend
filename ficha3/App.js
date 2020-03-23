var log = require("./Log");
log.test();

function started() {
    console.log("Started Download");
}

started();

function update(percentage) {
    console.log(percentage + "% od Download");
}

function completed() {
    console.log("Completed Download");
}

function performDownload(startedFn, updateFn, completedFn) {
    startedFn();
    for (let i = 0; i <= 100; i++) {
        updateFn(i);
    }
    completedFn();
}

performDownload(started, update, completed);

var arrayUtils = require("./ArrayUtils");

var array = [1, 2, 4];
var empty = arrayUtils.isEmpty(array);
console.log("Array is empty?: " + empty);

var max = arrayUtils.max(array);
console.log("Maxium value of array: " + max);

var value = 7;
var index = arrayUtils.indexOf(array, value);
console.log("Index of number " + value + " is :" + index);

var subArray = arrayUtils.subArray(array, 0, 2);
console.log("Sub-Array: " + subArray)
var array = [1, 2, 4];
var array2 = [1, 2, 3, 4];
var isSameLength = arrayUtils.isSameLenght(array, array2);
console.log("Arrays are the same size?:" + isSameLength);
var inverted = arrayUtils.reverse(array);
console.log("Array: " + inverted);

var swapped = arrayUtils.swap(array, 0, 1);
console.log("swapped : " + swapped);

var contains = arrayUtils.contains(array, 1);
console.log("Array contains value? " + contains);

var concate = arrayUtils.concatenate(array, [7, 7, 7, 7]);
console.log(concate);