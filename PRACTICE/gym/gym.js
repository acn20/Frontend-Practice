/*faci acele AJAX requests pentru toate celelalte butoane care au ramas
si apoi la Register de exemplu
daca requestul e successful, afisezi un span pe ecran in care scrie OK cu litere verzi
iar daca e eroare, afisezi un span pe ecran in care scrie Error cu litere rosii
acel span va fi afisat sub randul pe care ai acel input si button
il pui intr-un div separat
si faci la fel si pt celelalte 2 sectiuni*/

$(function () {
	var rootUrl = "http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/";

	$("#registerBtn").click(function () {
		var pin = $("#registerPin").val();

		registerPin(pin);
	})

	function registerPin(pin) {
		/*2 parametri. 
		primul: unde vreau sa trimit requestul
        al doilea: "proprietatile" requestului, inclusiv ce sa faci daca e OK sau daca ceva nu merge.
        Acest json va fi citit de jquery, sunt instructiuni pentru jquery, jquery va lua nota pentru ele si va respecta instructiunile tale
		*/
		$.ajax(rootUrl + pin + "/register", {
			"method": "POST", // this is the type of the request, i.e. GET, POST
			"success": function () {
				$("#successRegister").removeClass("hidden");
				$("#errorRegister").addClass("hidden");//cand jquery vede aceasta proprietate, va sti ca daca e succes va executa aceasta functie				
			},
			"error": function () {
				$("#errorRegister").removeClass("hidden");
				$("#successRegister").addClass("hidden");
			}
		})

		// http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/1021031014/register
		// http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/1021031014/enter
		// http://sampleapis20180514091454.azurewebsites.net/api/v1/gym/1021031014/exit
	}

	$("#enterBtn").click(function () {
		var pin = $("#enterWithPin").val();

		enterWithPin(pin);
	})

	function enterWithPin(pin) {
		$.ajax(rootUrl + pin + "/enter", {
			"method": "POST",
			"success": function () {
				$("#successEnter").removeClass("hidden");
				$("#errorEnter").addClass("hidden");
			},
			"error": function () {
				$("#errorEnter").removeClass("hidden");
				$("#successEnter").addClass("hidden");
			}
		})
	}

	$("#exitBtn").click(function () {
		var pin = $("#exitWithPin").val();

		exitWithPin(pin);
	})

	function exitWithPin(pin) {
		/*2 parametri. 
		primul: unde vreau sa trimit requestul
        al doilea: "proprietatile" requestului, inclusiv ce sa faci daca e OK sau daca ceva nu merge.
        Acest json va fi citit de jquery, sunt instructiuni pentru jquery, jquery va lua nota pentru ele si va respecta instructiunile tale
		*/
		$.ajax(rootUrl + pin + "/exit", {
			"method": "POST", // this is the type of the request, i.e. GET, POST
			"success": function () {
				$("#successExit").removeClass("hidden");
				$("#errorExit").addClass("hidden");//cand jquery vede aceasta proprietate, va sti ca daca e succes va executa aceasta functie				
			},
			"error": function () {
				$("#errorExit").removeClass("hidden");
				$("#successExit").addClass("hidden");/*cu functia css as fi putut schimba valoarea display-ului in felul urmator: $(.hidden).css("display", null)*/
			}
		})
	}
})
