function isPrime(n) {
    if (n < 0) {
        throw new Error("The number is negative");
    }
    if (n < 2) {
        return false;
    }
    if(n == 2) {
        return true;
    }
    if(n >= 1000) {
        throw new Error("The number is too large")
    }

    var numbers = [];
    for(var i = 0; i < 1000; i++) {
        numbers.push(null);
    }

    numbers[0] = false;
    numbers[1] = false;

    for(var i = 2; i < 1000; i++) {
        if(numbers[i] == null) {
            numbers[i] = true;
            for(var j = 2*i; j < 1000; j+=i) {
                numbers[j] = false;
            }
        }
    }

    return numbers[n];
}
//un array cu 1000 de elemente cu true sau false (true pentru prim si false pentru compus), indexul reprezinta numarul