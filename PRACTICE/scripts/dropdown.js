$(function() {//aceasta functie va fi executata cand dom ready (DOM este gata)
	var cities = ["New York", "Dallas", "San Francisco", "Miami", "London"];//aceste date vin de la server

	for(var i = 0; i < cities.length; i++) {
		var cityOption = $('<option />'); // <option></option> creates an "option" element in-memory. not displayed on screen yet
		cityOption.val(cities[i]); // sets the value property: <option value="Dallas"></option> pentru ca serverul sa stie ce optiune a fost selectata (cand aceasta data este trimisa la server)
		cityOption.html(cities[i]); // <option value="Dallas">Dallas</option> adauga continut
		cityOption.addClass('my-city'); // <option class="my-city" value="Dallas">Dallas</option>
		cityOption.addClass('my-option'); // <option class="my-city my-option" value="Dallas">Dallas</option>
		$('#town-select').append(cityOption); // now we add this to the element that is on the screen (adauga elementrul option la elementul #town-select, care e pe ecran)
	}

	$('#town-select').change(function() {
		// this function is executed when we select a new value in the dropdown
		// this is called the "change" event. we say that this function is called/executed
		// "on change"
		console.log($(this).find(':selected').html());//"this" se refera la "town-select", iar find(':selected') gaseste elementul care a fost selectat
		//':selected' este o pseudoclasa.
		// html function, when used without a parameter, returns or GETS the html content of an element
		// when used with a parameter, SETS the html content of an element
	})
})

function name(studentName) {
	var myName = "Alex";	
	if(!studentName) { // if there is no parameter
		return myName;				
	} else {
		myName = studentName;		
	}
}//e o functie care returneaza (adica e de tip GET) doar cand nu are parametru
//daca ii dai un parametru, atunci devine de tip SET si nu vrei sa returneze

/*cand functia dolar vede ca tu ai pus un selector drept parametru, atunci o sa foloseasca acel selector sa gaseasca un element sau elemente pe pagina
tu in cazul asta ai un selector care selecteaza un element unic (adica $(#'town-select'))
dar poti sa folosesti ceva de genul
$('.my-option') - aici iti selecteaza toate elementele cu clasa .my-option*/

// Dallas
//o functie care afiseaza ceva de exemplu nu are nevoie de parametru