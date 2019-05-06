/*functie cu 2 parametri de tip array (doar cu numere) si functia returneaza elem care e in plus intre cele doua array-uri (voi primi array-uri care au tot in comun dar unul din array-uri are un elem extra)*/
function extraElem(list1, list2) {
    if (Math.abs(list1.length - list2.length) != 1) {
        throw new Error("Please enter two lists that have the same elements except one of the list has an extra element");
    }

    list1.sort();//The sort() method sorts the elements of an array in place and returns the array.
    list2.sort();

    if (list1.length > list2.length) {
        for (let i = 0; i < list2.length; i++) {
            if (list1[i] != list2[i]) {
                return list1[i];
            }
        }
        return list1[list1.length - 1];
    }
    else {
        for (let i = 0; i < list1.length; i++) {
            if (list1[i] != list2[i]) {
                return list2[i];
            }
        }
        return list2[list2.length - 1];
    }
}

function extraElem2(list1, list2) {
    if (Math.abs(list1.length - list2.length) != 1) {
        throw new Error("Please enter two lists that have the same elements except one of the list has an extra element");
    }

    var sum1 = 0;
    var sum2 = 0;

    for (let i = 0; i < list1.length; i++) {
        sum1 += list1[i];
    }
    for (let i = 0; i < list2.length; i++) {
        sum2 += list2[i];
    }

    if (list1.length > list2.length) {
        return sum1 - sum2;
    }

    else {
        return sum2 - sum1;
    }
}