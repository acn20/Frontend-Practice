// ES6 (EcmaScript 6)
class Animal {
	constructor(name) {//aceasta functie se declanseaza automat cand cream un nou obiect de tip Animal
	//daca nu punem constructor javascript automat creaza un constructor gol, care nu face nimic
		this.name = name;
	}

	eat() {
		console.log('the animal is now eating!');

		this.hasEaten = true; // creates property hasEaten and assigns it true
	}

	breathe() {
		console.log('the animal is now breathing!');
	}

	getName() {
		return this.name;
	}
}

function Animal() {
	this.eat = function() {//se poate si asa, dar mai rar

	}
}

// Dog is a derived or "child" class. Animal is the "parent" or base/super class
class Dog extends Animal {//prin extends clasa Dog mosteneste functiile clasei Animal
	constructor(name) {
		super(name); // this calls the constructor of the parent/base/super class (Animal) (the constructor cannot be inherited)
	}
}

var myAnimal = new Animal("Rex");//parametrul de aici este parametrul de la constructor
myAnimal.eat();
var name = myAnimal.getName(); // returns "Rex"
var max = new Dog("Max");