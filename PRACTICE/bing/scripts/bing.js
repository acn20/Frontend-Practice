$(function () {
    let suggestions = ["How to stop a cold from coming", "What exercices are best", "When does the festival happen"];
    var history = [];

    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    var background = getRandomIntInclusive(0, 9);
    if(background == 0) {
        $("body").attr("id", "zero");
    }
    if(background == 1) {
        $("body").attr("id", "one");
    }
    if(background == 2) {
        $("body").attr("id", "two");
    }
    if(background == 3) {
        $("body").attr("id", "three");
    }
    if(background == 4) {
        $("body").attr("id", "four");
    }
    if(background == 5) {
        $("body").attr("id", "five");
    }
    if(background == 6) {
        $("body").attr("id", "six");
    }
    if(background == 7) {
        $("body").attr("id", "seven");
    }
    if(background == 8) {
        $("body").attr("id", "eight");
    }
    if(background == 9) {
        $("body").attr("id", "nine");
    }

    $("#searchInput").focus();

    $("#searchButton").click(function () {
        history.push($("#searchInput").val());
        $("#searchInput").val("");
    })

    $("#searchInput").click(function () {
        $("#dark").show();
        $("#searches").empty();
        for (let i = 0; i < history.length; i++) {
            var searched = $("#searched").clone();
            searched.attr("id", null);
            searched.html(history[i]);
            $("#searches").append(searched);
        }
    })

    $("#searchInput").change(function () {
        var value = $("#searchInput").val();
        $("#suggestions").empty();
        var filteredList = filteredSuggestions(value, suggestions);
        for (let i = 0; i < filteredList.length; i++) {
            var filteredSuggestion = $("#filteredSuggestion").clone();
            filteredSuggestion.attr("id", null);
            filteredSuggestion.html(filteredList[i]);
            $("#suggestions").append(filteredSuggestion);
        }
    })
})