describe("extraElem tests", function () {
    describe("When difference between lists lengths is not 1", function () {
        it("Throws error", function () {
            var list1 = [1, 4, "1", 0, false];
            var list2 = [1, 4, "1", 0, false];

            expect(function() { extraElem(list1, list2) }).toThrow();;
        })
    })

    describe("When the first array has an extra element", function () {
        it("Returns the extra element", function () {
            var list1 = [1, 4, "1", 0, false];
            var list2 = [1, "1", 0, false];
            var result = extraElem(list1, list2);

            expect(result).toEqual([4]);
        })
    })

    describe("When the second array has an extra element", function () {
        it("Returns the extra element", function () {
            var list1 = [1, 4, "1", 0, false];
            var list2 = [1, 4, "1", 0, false, "hello"];
            var result = extraElem(list1, list2);

            expect(result).toEqual(["hello"]);
        })
    })

    //daca primul array e mai lung, daca unul are 0 elem si altul 1 elem etc

})