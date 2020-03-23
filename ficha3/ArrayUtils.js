var arrayUtils = {
    isEmpty: function(array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    max: function(array) {
        var maxValue = array[0];
        // var maxArray=[];
        for (let i = 1; i < array.length; i++) {
            if (array[i] >= maxValue) {
                maxValue = array[i];
                //maxArray.push(maxValue);
            }
        }
        return maxValue;
    },
    indexOf: function(array, value) {
        var index = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                index = i;
            }
        }
        return index;
    },
    subArray: function(array, startIndex, endIndex) {
        var subArray = [];
        for (let i = startIndex; i <= endIndex; i++) {
            subArray.push(array[i]);
        }
        return subArray;
    },
    isSameLenght: function(array1, array2) {

        if (array1.length == array2.length) {
            return true;

        } else {
            return false;
        }

    },
    reverse: function(array) {
        var inverted = [];
        for (let i = array.length - 1; i >= 0; i--) {
            inverted.push(array[i]);
        }
        return inverted;
    },
    swap: function(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
        return array;
    },
    contains: function(array, value) {
        if (!this.isEmpty(array)) {
            if (this.indexOf(array, value) != -1) {
                return true;
            }
        } else {
            return false;
        }

    },
    concatenate: function(array1, array2) {
        var array = array1;
        for (let i = 0; i < array2.length; i++) {
            array.push(array2[i]);

        }
        return array;

    }
};

//Exportar o objeto como módulo para o Node.js
module.exports = arrayUtils;