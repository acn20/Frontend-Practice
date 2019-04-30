function isPalindrome(text) {
    if(text == "") {
        return true;
    }

    if(text.length == 1) {
        return true;
    }

    for(var i = 0; i < text.length/2; i++) {
        if(text[i] != text[text.length - 1 - i]) {
            return false;
        }
    }

    return true;
}