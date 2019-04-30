function MovieService() {
	var rootUrl = "http://sampleapis20180514091454.azurewebsites.net/api/Movies";

	this.getMovies = function(callback) {//pe functia/obiectul pe care suntem vrem sa cream proprietatea getMovies
		$.ajax(rootUrl, {
			"method": "GET",
			"success": callback//call me back when you're ready (callback e o functie data ca parametru la o alta functie)
		})

		/*
			response format:

			{
				"movies": [
					{
						"id": "dsahjdisa"
						// etc
					}
					// etc
				]
			}
		*/
	}

	this.searchMovies = function(text, callback) {
		var searchUrl = rootUrl + "/search?query=" + text;//concatenare de stringuri
		//in backend a fost programat ca atunci cand e folosita aceasta adresa sa iti returneze doar filmele cautate

		$.ajax(searchUrl, {
			"method": "GET",
			"success": callback
		})
	}

	this.getPaginatedMovies = function(pageIndex, pageSize, callback) {
		var paginatedUrl = rootUrl + "/paginated?pageIndex=" + pageIndex + "&pageSize=" + pageSize;

		$.ajax(paginatedUrl, {
			"method": "GET",
			"success": callback
		})
	}
}

// example
// var service = new MovieService();//service e un nou obiect creat
// service.getMovies(function(response) {
// 	// find the top 10 movies
// 	var top10 = []; //... this array contains top 10

// 	//then show top 10 movies on the screen	
// });
//callback iti permite ca tu dupa ce iei (prin getMovies) baza de date de filme, sa faci ce vrei tu cu ele. De exemplu sa le afisezi doar pe primele 10 cele mai bune (dupa rating)
//practic la functia getMovies vei avea parametru o functie (pe care o decizi tu)