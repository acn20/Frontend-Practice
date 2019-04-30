/*Centreaza lista de filme
Iar la fiecare film
Întâi titlul
Apoi pe următorul rand vrei avea asa: întâi descrierea, apoi imaginea
Ambele pe același nivel cum ar veni

Si tot acest div care contine un film să aiba lățimea cat 30% din ecran
Cam

Ai putea să începi să lucrezi și la un concept numit lazy loading

un concept simplu dar important
Înseamnă să încarci anumite date numai când ai nevoie de ele
De exemplu tu in loc sa iei toate filmele de pe server
Iei doar o parte
Doar pe primele

Si atunci când vezi ca userul da scroll... Atunci iei restul
De-aia ii spune lazy

Ai terminat
Deci afișează doar 10 filme pe pagina
Si sub lista de filme ai un buton Load More
Când îl apesi trimiți un Get request la un endpoint pe care îl fac diseară
Ca sa iei următoarele 1 filme0
10 filme
Si tot asa
Le tot adaugi la lista existenta
Eu la acel ebdpoint o sa vreau să-mi trimiți numărul paginii
Pentru ca tu într-un fel faci pagini
:)
Prima pagina o iei de la server cand se încarcă
A 2-a pagina o iei cand dai click pe buton
Si la fel si următoarele
Deci tu trebuie să știi pe ce pagina te afli

Când dai click pe un film din lista aia de filme, afișează o fereastră care conține informații despre acel film
Pot fi aceleași informații pe care le ai deja pe pagina. Nu trebuie să fie informații noi
Ce vreau sa înveți este cum sa afisezi un dialog
La asta ma refeream cand am zis fereastra
Si vei face asa: faci un hidden div cu structura pe care o vrei
Si cand dai click pe un film
Populezi acel div cu datele despre film
Si afisezi divul fix în mijlocul ecranului
Centrat atat pe orizontala cat si pe verticala
Și faci restul ecranului mai întunecat
Îți zic eu ce trebuie să faci
Trebuie să salvezi lista de filme într-o variabila
Si cand dai click pe un div cu film
Iei id-ul filmului de la data-movie-id
Si bazat pe id cauti filmul în variabila ta cu filme
Si cand găsești filmul
Pui datele din film în acel dialog
Si afisezi
*/
$(function () {
	var service = new MovieService();
	var tools = new MovieTools();
	var pageIndex = 0;
	var pageSize = 10;

	service.getPaginatedMovies(pageIndex, pageSize, function (response) {
		var movies = response.movies;//raspunsul este un obiect cu o singura proprietate "movies", care e un array de obiecte (filmele)

		for (var i = 0; i < movies.length; i++) {
			var movie = movies[i];
			var movieElement = tools.createMovieElement(movie);

			$("#movies").append(movieElement);
		}


		pageIndex++;
	});

	// service.getMovies(function (response) {
	// 	var movies = response.movies;//raspunsul este un obiect cu o singura proprietate "movies", care e un array de obiecte (filmele)

	// 	for (var i = 0; i < 10; i++) {
	// 		var movie = movies[i];
	// 		var movieElement = tools.createMovieElement(movie);

	// 		$("#movies").append(movieElement);
	// 		j = i;
	// 	}
	// });

	$("#loadMore").click(function () {
		service.getPaginatedMovies(pageIndex, pageSize, function (response) {
			var movies = response.movies;
			for (var i = 0; i < movies.length; i++) {
				var movie = movies[i];
				var movieElement = tools.createMovieElement(movie);

				$("#movies").append(movieElement);
			}
			pageIndex++;
		})
	});

	// add an input to the page and a search button
	// when you click search, you use the search function (in MovieService)
	// to search for the given term, then you show the results on the page
	// make sure you first
	//clear the list of films that you may already have on the page

	$("#search").click(function () {
		$("#movies").empty();
		service.searchMovies($("#searchQuery").val(), function (response) {
			var movies = response.movies;
			for (var i = 0; i < movies.length; i++) {
				var movie = movies[i];
				var movieElement = tools.createMovieElement(movie);
				$("#movies").append(movieElement);
			}
		})
		$("#searchQuery").val("");
		$("#loadMore").prop("disabled", true);
	})

	service.getMovies(function (response) {
		movies = response.movies;
		$("#movies").find(".movie").click(function () {
			movieId = $(this).attr("data-movie-id");
			for(var i = 0; i < movies.length; i++) {
				var movie = movies[i];

				if(movie.id == movieId) {
					$("#movieDialog").find(".title").html(movie.title);
					$("#movieDialog").find(".cover").attr("src", movie.cover_Url);
					$("#movieDialog").find(".rating").html(movie.rating);
					$("#movieDialog").find(".description").html(movie.description);
					$("#movieDialog").show();
					$("#overlay").show();
				}
			}
		})
	})

	$("#overlay").click(function () {
		$("#overlay").hide();
		$("#movieDialog").hide();
	})
})
//404 error inseamna ca nu exista lucrul pe care il vrei de la server (ori adresa nu exista, ori imaginea pe care o vrei, etc)
/*
most important http response statuses (fiecare raspuns pe care il primesc are o proprietate status)
200 - OK
401 - unauthorized
404 - not found
500 - internal server error

*/