$(function () {
	var service = new airportsService();
	var tools = new airportsTools();
	var airports = [];
	var airportsTexts = [];

	service.getAirports(function (response) {
		airports = response.airports;

		for (var i = 0; i < airports.length; i++) {
			var airport = airports[i];
			var airportString = airport.name +
				airport.code +
				airport.city +
				airport.state +
				airport.country +
				airport.tz +
				airport.icao;

			airportsTexts.push(airportString);
		}
	})

	$("#searchQuery").on("input", function () {
		var query = $("#searchQuery").val();
		//var foundAirports = searchAirport(airports, query);
		if (query.length < 3) {
			return;
		}

		var foundAirports = searchAirport2(airportsTexts, airports, query);

		$("#searchResults").empty();
		if (foundAirports.length == 0) {
			$("#searchResults").append($('<p>Nothing found</p>'));
			console.log("Nothing found");
		}

		for (var i = 0; i < foundAirports.length; i++) {
			var foundAirport = foundAirports[i];
			var airportElement = tools.createAirportElement(foundAirport);
			$("#searchResults").append(airportElement);
		}

		console.log(foundAirports);
	})

	function searchAirport(airportsList, text) {
		var matchedAirports = [];

		for (var i = 0; i < airportsList.length; i++) {
			var airport = airportsList[i];

			// var text = "Alex Mocanu";
			// var index = text.indexOf("Alex"); // index = 0
			// index = text.indexOf("Mocanu"); // index = 5
			// index = text.indexOf("Canu"); // index = -1

			if (airport.name.indexOf(text) > -1
				|| airport.code.indexOf(text) > -1
				|| airport.city.indexOf(text) > -1
				|| airport.state.indexOf(text) > -1
				|| airport.country.indexOf(text) > -1
				|| airport.tz.indexOf(text) > -1
				|| airport.icao.indexOf(text) > -1) {
				matchedAirports.push(airport);
			}
		}

		return matchedAirports;
	}

	function searchAirport2(airportStrings, airports, text) {//airportStrings e lista de texte pe care am construit-o noi
		var matchedAirports = [];

		for (var i = 0; i < airportStrings.length; i++) {
			var airportText = airportStrings[i];

			if (airportText.indexOf(text) > -1) {
				matchedAirports.push(airports[i]);
			}
		}

		return matchedAirports;
	}

})