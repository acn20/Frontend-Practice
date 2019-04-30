function filteredSuggestions(text, list) {
    var filteredSuggestionsList = [];

    for(var i = 0; i < list.length; i++) {
        if(list[i].toUpperCase().startsWith(text.toUpperCase())) {
            filteredSuggestionsList.push(list[i]);
        }
    }

    return filteredSuggestionsList;
}