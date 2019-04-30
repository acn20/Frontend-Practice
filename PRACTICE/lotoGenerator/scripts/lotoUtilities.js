function getRandomIntInclusive(min, max) {
    if(min < 0 || max < 0) {
        throw new Error("min and max must be positive");
    }
    if(min >= max) {
        throw new Error("min must be less than max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//testez validarile, ma asigur ca rezultatul se afla intre min si max, un alt test: daca intre min si max diferenta este de 1 sau de 100

function generateNumbers(min, max, count) {
    if(min < 0 || max < 0) {
        throw new Error("min and max must be positive");
    }
    if(min >= max) {
        throw new Error("min must be less than max");
    }
    if(count <= 0) {
        throw new Error("count must be a positive number");
    }
    if((max - min + 1) < count) {
        throw new Error("there not enough distinct numbers in the given range");
    }

    let numbers = [];

    while (numbers.length < count) {
        var x = getRandomIntInclusive(min, max);
        if (numbers.indexOf(x) == -1) {
            numbers.push(x);
        }
    }

    return numbers;
}
//testez validarile, ma asigur ca array-ul returnat nu e niciodata empty, array-ul trb sa aiba fix atatea elemente cat zice count
//ma asigur ca elem din array sunt intre min si max
//ma asigur ca diferenta dintre min si max + 1 este mai mare sau egala cu count
