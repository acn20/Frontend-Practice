//when number is 0
//when number is 1
//when number is 2
//when number is even
//when number is composite number
//when number is 10000
//when number is 10001 and greater
//when number is -1 and lower

describe("isPrime tests", function () {
    describe("When number is negative", function () {
        it("Throws error", function () {
            var n = -3;

            expect(function() {isPrime(n)}).toThrow();
        })
    })

    describe("When number is 1", function () {
        it("Returns false", function () {
            var n = 1;
            var result = isPrime(n);

            expect(result).toBe(false);
        })
    })

    describe("When number is zero", function () {
        it("Returns false", function () {
            var n = 0;
            var result = isPrime(n);

            expect(result).toBe(false);
        })
    })

    describe("When number is 2", function () {
        it("Returns true", function () {
            var n = 2;
            var result = isPrime(n);

            expect(result).toBe(true);
        })
    })

    describe("When number greater than 2 and not prime", function () {
        it("Returns false", function () {
            var n = 15;
            var result = isPrime(n);

            expect(result).toBe(false);
        })
    })

    describe("When number greater than 2 and prime", function () {
        it("Returns true", function () {
            var n = 7;
            var result = isPrime(n);

            expect(result).toBe(true);
        })
    })
})