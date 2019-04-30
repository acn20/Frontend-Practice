/*
replace one character with one character
replace one character with multiple characters
replace several characters
replace the entire text
when the string does not contain the given characters
when the string is shorter than the given characters
when the original string is empty
replace first character/last character
*/

describe("replaceAll", function() {
    describe("When replacing one character with one character", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll("a", "e");

            expect(result).toBe("Alexendru");
        })
    })

    describe("When replacing one character with multiple character", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll("a", "eu");

            expect(result).toBe("Alexeundru");
        })
    })

    describe("When replacing multiple characters with one character", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll("an", "e");

            expect(result).toBe("Alexedru");
        })
    })

    describe("When replacing multiple characters with multiple characters", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll("an", "eu");

            expect(result).toBe("Alexeudru");
        })
    })

    describe("When replacing the entire text", function () {
        it("returns the modified string", function () {
            var text = "Alex";
            var result = text.replaceAll("Alex", "Vlad");

            expect(result).toBe("Vlad");
        })
    })

    describe("When the text does not contain the given characters", function () {
        it("returns the original string", function () {
            var text = "Alex";
            var result = text.replaceAll("zzz", "aaa");

            expect(result).toBe("Alex");
        })
    })

    describe("When the string is shorter than the given characters", function () {
        it("returns the original string", function () {
            var text = "Alex";
            var result = text.replaceAll("Alexandru", "Vlad");

            expect(result).toBe("Alex");
        })
    })

    describe("When the original string is empty", function () {
        it("returns empty string", function () {
            var text = "";
            var result = text.replaceAll("Alex", "Vlad");

            expect(result).toBe("");
        })
    })

    describe("When the given characters are located at the beginning of the text", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll("Alex", "Vlad");

            expect(result).toBe("Vladandru");
        })
    })

    describe("When the given characters are located at the end of the text", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll("andru", "andra");

            expect(result).toBe("Alexandra");
        })
    })
})