describe("extraElem2 tests", function () {
    describe("When the two arrays have the same length", function () {
        it("Throws error", function () {
            var list1 = [1, 1, 0, 4];
            var list2 = [1, 4, 1, 0];

            expect(function() { extraElem2(list1, list2) }).toThrow();;
        })
    })

    describe("When the difference between lists lengths is greater than 1", function () {
        it("Throws error", function () {
            var list1 = [-2, 1, 4, 0, -1, 5, 10];
            var list2 = [1, 4, -2, -1, 0];

            expect(function() { extraElem2(list1, list2) }).toThrow();;
        })
    })

    describe("When both arrays are empty", function () {
        it("Throws error", function () {
            var list1 = [];
            var list2 = [];

            expect(function() { extraElem2(list1, list2) }).toThrow();;
        })
    })

    describe("When the first array has zero elements and the second array has one element", function () {
        it("Returns the extra element", function () {
            var list1 = [];
            var list2 = [5];
            var result = extraElem2(list1, list2);

            expect(result).toBe(5);
        })
    })

    describe("When the first array has one element and the second array has zero elements", function () {
        it("Returns the extra element", function () {
            var list1 = [5];
            var list2 = [];
            var result = extraElem2(list1, list2);

            expect(result).toBe(5);
        })
    })

    describe("When the first array has an extra element at the beginning", function () {
        it("Returns the extra element", function () {
            var list1 = [4, 0, 1,-1, -3];
            var list2 = [1, -3, 0, -1];
            var result = extraElem2(list1, list2);

            expect(result).toBe(4);
        })
    })

    describe("When the first array has an extra element in the middle", function () {
        it("Returns the extra element", function () {
            var list1 = [1, 4, 1, 0, -1];
            var list2 = [1, 0, -1, 1];
            var result = extraElem2(list1, list2);

            expect(result).toBe(4);
        })
    })

    describe("When the first array has an extra element at the end", function () {
        it("Returns the extra element", function () {
            var list1 = [1, 11, 0, -1, 4];
            var list2 = [0, 1, 11, -1];
            var result = extraElem2(list1, list2);

            expect(result).toBe(4);
        })
    })

    describe("When the second array has an extra element at the beginning", function () {
        it("Returns the extra element", function () {
            var list1 = [1, 0, 4, -1, 14];
            var list2 = [8, 1, 4, 14, 0, -1];
            var result = extraElem2(list1, list2);

            expect(result).toBe(8);
        })
    })

    describe("When the second array has an extra element in the middle", function () {
        it("Returns the extra element", function () {
            var list1 = [1, 0, 13, 4, -1];
            var list2 = [1, 4, 13, 8, 0, -1];
            var result = extraElem2(list1, list2);

            expect(result).toBe(8);
        })
    })

    describe("When the second array has an extra element at the end", function () {
        it("Returns the extra element", function () {
            var list1 = [11, 4, 1, 0, -1];
            var list2 = [1, 4, 11, 0, -1, 9];
            var result = extraElem2(list1, list2);

            expect(result).toBe(9);
        })
    })

})