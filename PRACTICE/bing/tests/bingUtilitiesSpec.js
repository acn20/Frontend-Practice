let suggestions = ["Adriana Lima age", "When is Easter", "What is best to eat"];

function checkMatch(describeText, itText, text, list, expected) {
    describe(describeText, function () {
        it(itText, function () {
            var result = filteredSuggestions(text, list);

            expect(result).toEqual(expected);
        })
    })
}

describe("filteredSuggestions tests", function () {
    checkMatch("When text has one letter and matches a suggestion", "Returns a new array of strings", "A", suggestions, ["Adriana Lima age"])
    checkMatch("When text has multiple letters letters and matches suggestion", "Returns a new array of strings", "Wh", suggestions, ["When is Easter", "What is best to eat"])
    checkMatch("When text has one letter and doesn't match any suggestions", "Returns an empty array", "g", suggestions, [])

    describe("When text has one letter which can be found at the beginning of a word in the list or more but is not camel case", function () {
        it("Returns a new array of strings", function () {
            var text = "a";
            var list = suggestions;
            var result = filteredSuggestions(text, list);

            expect(result).toEqual(["Adriana Lima age"]);
        })
    })

    describe("When text has two letters which can be found at the beginning of a word in the list or more but are not camel case", function () {
        it("Returns a new array of strings", function () {
            var text = "wh";
            var list = suggestions;
            var result = filteredSuggestions(text, list);

            expect(result).toEqual(["When is Easter", "What is best to eat"]);
        })
    })
})