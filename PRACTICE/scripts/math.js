function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    if (a == 0 || b == 0)
        throw new Error("a and b must be non zero.");
    
    return a * b;
}

function compute(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0)
        throw new Error("a, b and c must be positive");

    return multiply(add(a, b), c);
}

function sum1(n) {
    if (n <= 0)
        throw new Error("n must be positive");

    return n * (n + 1) / 2;
}

function sum2(n) {
    if (n <= 0)
        throw new Error("n must be positive");

    var sum = 0;

    for(var i=1; i<=n; i++) {
        sum = sum + i;
    }

    return sum;
}

function sum3(n) {
    if (n <= 0)
        throw new Error("n must be positive");

    if (n == 1)
        return 1;

    return n + sum3(n-1);
}

function sum4(n) {
    if (n <= 0)
        throw new Error("n must be positive");
 
    var i = 0;
    var sum = 0;

    while (i <= n) {
        sum += i;

        i++;
    }

    return sum;
}