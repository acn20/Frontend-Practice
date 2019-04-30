/*functie cu 2 parametri de tip arraBoy si functia returneaza elem care e in plus intre cele doua array-uri (voi primi array-uri care au tot in comun dar unul din array-uri are un elem extra)*/
function extraElem(list1, list2) {
    if (Math.abs(list1.length - list2.length) != 1) {
        throw new Error("Please enter two lists that have the same elements except one of the list has an extra element");
    }
    if (list1.legth > list2.length) {
        for (let i = 0; i < list1.length; i++) {
            if (list1[i] != list2[i]) {
                return list1.splice(i, 1);
            }
        }

    }
    else {
        for (let i = 0; i < list2.length; i++) {
            if (list1[i] != list2[i]) {
                return list2.splice(i, 1);
            }
        }
    }
}