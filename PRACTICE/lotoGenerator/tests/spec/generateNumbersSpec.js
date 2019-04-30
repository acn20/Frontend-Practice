describe("generateNumbers Tests", function () {
    describe("When min and max are negative", function () {
        it("Throws error", function () {
            var min = -3;
            var max = -6;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When one of the parameters is negative", function () {
        it("Throws error", function () {
            var min = -3;
            var max = 6;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When min is greater than max", function () {
        it("Throws error", function () {
            var min = 5;
            var max = 2;
            var count = 3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When count is not positive", function () {
        it("Throws error", function () {
            var min = 2;
            var max = 4;
            var count = -3;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When the number of numbers is less than count", function () {
        it("Throws error", function () {
            var min = 3;
            var max = 5;
            var count = 4;
            expect(function () { generateNumbers(min, max, count) }).toThrow();
        })
    })

    describe("When the difference between min and max is 1", function () {
        it("Gives a result between min and max", function () {
            var min = 4;
            var max = 5;
            count = 1;
            var result = generateNumbers(min, max, count);
            expect(result == min || result == max).toBe(true);
        })
    })

    describe("When the difference between min and max is 100", function () {
        it("Gives a result between min and max", function () {
            var min = 4;
            var max = 104;
            count = 5;
            var result = generateNumbers(min, max, count);
            for(var i = 0; i < result.length; i++) {
                expect(result[i] >= min && result[i] <= max).toBe(true);
            }
        })
    })

    describe("When the number of numbers is equal to count", function () {
        it("Gives a result between min and max", function () {
            var min = 1;
            var max = 10;
            count = 10;
            var result = generateNumbers(min, max, count);
            for(var i = 0; i < result.length; i++) {
                expect(result[i] >= min && result[i] <= max).toBe(true);
            }
        })
    })
})