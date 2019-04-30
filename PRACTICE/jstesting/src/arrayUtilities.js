//we are extending strings to include a "replaceAll" function to replace all the occurences in the string
String.prototype.replaceAll = function(original, newText) {
    var value = this;

    return value.split(original).join(newText);
}

String.prototype.replaceAll2 = function(original, newText) {
    var value = this;
    var temp = this;

    do {
        value = temp;
        temp = temp.replace(original, newText);
    } while (temp != value);

    return temp;
}

String.prototype.replaceAll3 = function(original, newText) {
    var temp = this;
    while(temp.indexOf(original) != -1) {
        temp = temp.replace(original, newText);
    }

    return temp.toString();
}



var name = "Alexandru Andreescu";
name = name.replaceAll("A", "a") // "alexandru andreescu"