var list = [];
list.push(1);
list.push(2);

// [1, 2]

function addAll(n) {
    if(n < 0) {
        throw new Error("n cannot be negative.");
    }

    if(n == 0) {
        return [0];
    }

    var array = [];

    for(var i = 0; i < n; i++) {
        array.push(i);
    }

    return array;
}

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var combined = array1.concat(array2); // [1, 2, 3, 4, 5, 6]

function addAllRecursive(n) {
    if(n < 0) {
        throw new Error("n cannot be negative.");
    }

    if(n == 0) {
        return [0];
    }

    // return [n].concat(addAllRecursive(n-1));
    return addAllRecursive(n-1).concat([n]);  //[n].concat(addAllRecursive(n-1));
}


