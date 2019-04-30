/*problema: fa o functie care primeste ca parametru un array, si returneaza un array cu toate elementele dublate
de exemplu daca parametrul este [4, 3, 6, 8]
returneaza [4, 4, 3, 3, 6, 6, 8, 8]*/

string = [];
function double(list) {
    var afterList = [];
    for (var i = 0; i < list.length; i++) {
        afterList.push(list[i], list[i]);
    }
    return afterList;
}


/*apoi alta functie care primeste un array ca parametru si returneaza alt array
si cerinta e urmatoarea: pentru fiecare element de pe pozitia i din primul array, al doilea array va avea pe pozitia i true daca array[i] este par, false daca este impar
de exemplu
[1, 2, 4, 4, 3] va produce [false, true, true, true, false]*/

function evenOrOdd(list) {
    var afterList = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            afterList.push(true);
        }
        else {
            afterList.push(false);
        }
    }
    return afterList;
}

/*Fă un cod care inversează un array
Ultimul element devine primul
Etc
A b z e r
Devinr
R e z b a*/

function inverse(list) {
    var afterList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        afterList.push(list[i]);
    }
    return afterList;
}

function inverse2(list) {
    var tmp;
    for (var i = 0; i < list.length / 2; i++) {
        tmp = list[i];
        list[i] = list[list.length - 1 - i];
        list[list.length - 1 - i] = tmp;
    }
    return list;
}


/*Fă o funcție care primește un array și returnează un alt array astfel:
Toate elementele pare din array ul original sunt la început, urmate de toate elementele impare
De ex 1 6 8 9 0 1 0 3 devine
6 8 0 0 1 9 1 3 */


function evenThenOdd(list) {
    var afterList = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            afterList.push(list[i]);
            list.splice(i, 1);
        }
    }
    afterList.push(list);
    return afterList;
}



/*faci o functie care primeste un array ca parametru
si returneaza un JSON / obiect / dictionary care pentru fiecare element contine de cate ori apare acel element
de exemplu daca ai un array [1, 1, 1, 3, 2, 3]
functia returneaza

{
    '1': 3,
    '2': 1,
    '3': 2
}

PROBLEMA REZOLVATA IN FISIERUL arrays1.js --> functia countElements

trb sa folosesti dictionary
ca sa numeri

dictionary = json = cam cum arata acel student

numai ca in loc de proprietatea name etc
fol dictionary 🙂

deci in loc de name de exemplu
vei avea cate o proprietate pt fiecare element din array
de ex daca ai unarray [7, 4]
vei folosi un json ceva de genul:
{
    7: 1,
    4: 1
}
adica 7 apare o data, si 4 tot o data
etc

deci faci un for pt fiecare element din array
i -> 0, array.length
si in acel for verifici daca in dictionary ai adaugat acea proprietate

if(dict[array[i]])
deci
ca sa accesezi proprietatea unui dictionary
folosesti tot paranteze patrate
student['name']
sau poti si student.name
sau in cazul tau
dict[1]
sau dict[7]
sau ma rog tu nu stii numele din array
asa ca vei folosi
dict[ array[i] ]
am pus spatii ca sa fie mai clar
iar daca acea proprietate exista, atunci acel cod iti va da valoarea proprietatii
daca nu exista, dict[array[i]] va fi null
iar in javascript null e considerat false
deci de-aia puti pune acel cod intr-o conditie
if( dict[list[i]] )
iar daca dict[list[i]] exista si are o valoare, atunci va fi un fel de true

*/
var string = [];
function howManyTimes(list) {
    var afterList = [];
    for (var i = 0; i < list.lentgh; i++) {
        afterList = [list[i]];
        for (var j = 1; j < list.length; j++) {
            if (afterList.indexOf(list[j]) >= 0) {
                afterList.push(list[j]);
            }
        }
        if (i < list.length - 1) {
            console.log(list[i], ': ', afterList.length, ',');
        }
        else {
            console.log(list[i], ': ', afterList.length);
        }
    }
}

/*5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
tip: folosesti string.split ca sa separi un string intr-un array de cuvinte
apoi pe fiecare cuvant modifici sa fie uppercase
apoi unesti array-ul intr-un string si il returnezi din functie

7. Write a JavaScript function that accepts a string as a parameter and returns the number of vowels within the string.

6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Returneaza acel cuvant*/

function setFirstLetterUpperCase(text) {
	if(text == null) {
		throw new Error('Text cannot be null.');
	}
    if(text == "") {
        return "";
	}

    var words = text.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    var finalText = words.join(" ");
    return finalText;
}

function isVowel(letter) {
	if(letter.length != 1) {
		throw new Error("The parameter must be a letter");
	}

	letter = letter.toUpperCase();

	return letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U';
}

function howManyVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (isVowel(text[i])) {
            count++;
        }
    }
    return count;
}

function longestWord(text) {
    if(text == "") {
        return "";
    }
    var words = text.split(" ");
    var theLongest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > theLongest.length) {
            theLongest = words[i];
        }
    }
    return theLongest;
}

// TODO solve using one for
function longestWord2(string) {
    var array = [];
    var difference = 0;
    var lastWordLength = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            array.push(i);
        }
    }
    for(i = array[array.length - 1]; i < string.length - 1; i++) {
        lastWordLength++;
    }
    
    for (i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] > difference) {
            difference = array[i] - array[i - 1];
            var position = array[i - 1] + 1;
        }
    }
    if(lastWordLength > difference) {
        difference = lastWordLength;
        position = array[array.length - 1] + 1;
    }
    return string.slice(position, position + difference);
}

/*declara un obiect cu 4 functii: add, subtract, multiply si divide
numeste-l calculator
🙂
si implementeaza toate functiile
si apoi foloseste-l in cateva exemple
fa si cu JSON si cu functie
fa un obiect care reprezinta o masina 🙂 adauga-i minim 3 functii si minim 2 proprietati
fa cu function, nu cu JSON*/

var calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var sum = calculator.add(2, 3);

function calculator2() {
    this.add = function(a, b) {
        return a + b;
    }
    this.subtract = function(a, b) {
        return a - b;
	}
    this.multiply = function(a, b) {
        return a * b;
	}
    this.divide = function(a, b) {
        return a / b;
	}
}

var c = new calculator2();
var result = c.add(100, 200);

var robot = {
    name: "Alysa",
    gender: "female",
    eyes: "blue",
    skinTone: "white",
    wig: "no",
    communicates: function () {
    },
    moves: function() {
    },
    facialExpressions: function(){

	}
}

// number object
function number(value) {
	this.value = value;//this este o variabila speciala care se refera la contextul in care te afli (aici la functia number)

	var self = this;

	this.add = function(a) {
		var sum = self.value + a;

		return new number(sum);
	}

	this.addWithObjects = function(n) {//n este un alt obiect de tip number
		return new number(self.value + n.value);
    }
    
    this.subtract = function(a) {
        var subtract = self.value - a;
        return new number(subtract);
    }
    this.subtractWithObjects = function(n) {
        return new number(self.value - n.value)
    }

    this.multiply = function(a) {
        var multiply = self.value * a;
        return new number(multiply);
    }
    this.multiplytWithObjects = function(n) {
        return new number(self.value * n.value)
    }

    this.divide = function(a) {
        var divide = self.value / a;
        return new number(divide);
    }
    this.multiplytWithObjects = function(n) {
        return new number(self.value / n.value)
    }

}

var n1 = new number(1); //creates an object that represents number 1
var n2 = n1.add(1); // creates an object that represents 1+1 = 2
var n3 = n1.addWithObjects(n2);
var n4 = n1.addWithObjects(n2).multiplytWithObjects(n3);


/*Fă un obiect (funcție) care conține funcții ce calculează aria unei figuri geometrice
De exemplu are funcția rectangleArea()
SquareArea()
Și pentru cerc
Și ca parametri primește lungime, lățime
Respectiv latura pătratului
Respectiv raza cercului
Și fiecare funcție folosește formula pentru acea figură*/

function area() {
    
    this.rectangleArea = function(rectangleLength, rectangleWidth) {
        return rectangleLength * rectangleWidth;
    }
    this.squareArea = function(squareSide) {
        return squareSide + squareSide;
    }
    this.circleArea = function(circleRadius) {
        return circleRadius * circleRadius * Math.PI;
    }
}

var geometry = new area();
var result = geometry.circleArea(1);
