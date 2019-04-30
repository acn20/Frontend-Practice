function MovieTools() {
	/*
	{
		"id": "4fede47d312f91279600023e",
		"cover_Url": "http://ia.media-imdb.com/images/M/MV5BMTYwNzEwNTI3MV5BMl5BanBnXkFtZTcwODUyODczMQ@@._V1._SX94_SY140_.jpg", "description": "The lives of two lovelorn spouses from separate marriages, a registered sex offender, and a disgraced ex-police officer intersect as they struggle to resist their vulnerabilities and temptations.",
		"rating": "7.7",
		"title": "Les enfants"
	}
	*/
	//toate aceste elemente/atribute le bag in template

	this.createMovieElement = function (movie) {
		var clone = $("#movieTemplate").clone();//nu trebuie scos id-ul la clone?
		clone.attr("id", null);
		clone.attr("data-movie-id", movie.id);
		clone.find(".title").html(movie.title);
		clone.find(".cover").attr("src", movie.cover_Url);
		clone.find(".rating").html(movie.rating);
		clone.find(".description").html(movie.description);

		// add the data from the movie to the HTML element

		return clone;
	}
}