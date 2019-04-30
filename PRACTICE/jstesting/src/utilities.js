function getInitials (name) {
    if(name == null) {
        throw new Error("The name variable must not be null");
    }

    if(name.trim() == "") {//functia trim sterge toate spatiile de la inceput si de la sfarsit
        throw new Error("Name expected");
    }

    name = name.replaceAll("-", " ").replaceAll("'", " ");

    var initials = "";

    // for(var i = 0; i < name.length; i++) {
    //     if (name[i] == name[i].toUpperCase()) {
    //         initials = initials.concat(name[i]);
    //     }
    // }

    var nameComponents = name.split(" ");
    for(var i = 0; i < nameComponents.length; i++) {
        initials = initials.concat(nameComponents[i][0].toUpperCase());
    }

    return initials;
}

function buildFilename(name) {
    try {
        var initials = getInitials(name);

        return initials + "-Pre-Discovery-Call.pdf"; // AM-Pre-Discovery-Call.pdf
    } catch(err) {
        // this will be executed if the getInitials() function throws an error
        return "Unknown-Pre-Discovery-Call.pdf";
    }
}

function convertToUpperCaseOrLowerCase(text) {
    var letters = [];
    for(var i = 0; i < text.length; i++) {
        if(text[i] == text[i].toUpperCase()) {
            letters.push(text[i].toLowerCase());
        } else {
            letters.push(text[i].toUpperCase());
        }
    }

    return letters.join('');
}

function convertToCamelCase(text) {
    var letters = [text[0].toUpperCase()];
    for (var i = 0; i < text.length - 1; i++) {
        if (text[i] == " " && text[i + 1] != " ") {
            letters.push(text[i + 1].toUpperCase());
        }
        else {
            if (text[i + 1] != " ") {
                letters.push(text[i + 1]);
            }
        }
    }

    return letters.join('');
}

function convertToCamelCase2(text) {
    var words = text.split(' ');
    for(var i = 0; i < words.length; i++) {
        if(words[i][0] == words[i][0].toLowerCase()) {
            words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
        }
    }

    return words.join('');
}