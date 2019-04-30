var animal = {
	"age": 3,
	"weight": 14, // kg
	"makeSound": function() {
		// bark, meow etc
	}
}

// JSON = JavaScript Object Notation
var age = animal.age;
animal.makeSound();

animal.age++;

animal.id = '19191919';//adauga proprietatea id
// sau
animal['id'] = '19191919';

animal.kill = function() {
	// something that kills the animal
}

var credentials = {
	"username": readUsername(),
	"password": readPassword()
}

function readUsername() {
	// function that reads the username from the screen
}

function readPassword() {
	// function that reads the password from the screen
}