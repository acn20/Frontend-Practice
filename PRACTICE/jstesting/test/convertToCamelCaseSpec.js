describe("convertToCamelCase", function () {
    describe("When text has only one word", function () {
        it("Returns one word", function () {
            var text = "andreea";
            var result = convertToCamelCase(text);

            expect(result).toBe("Andreea");
        })
    })

    describe("When text has multiple words", function () {
        it("Returns multiple words", function () {
            var text = "andreea si ana";
            var result = convertToCamelCase(text);

            expect(result).toBe("AndreeaSiAna");
        })
    })
})