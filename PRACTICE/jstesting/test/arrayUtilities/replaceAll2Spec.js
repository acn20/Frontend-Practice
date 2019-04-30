describe("replaceAll2", function() {
    describe("When replacing one character with one character", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll2("a", "e");

            expect(result).toBe("Alexendru");
        })
    })

    describe("When replacing one character with multiple character", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll2("a", "eu");

            expect(result).toBe("Alexeundru");
        })
    })

    describe("When replacing multiple characters with one character", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll2("an", "e");

            expect(result).toBe("Alexedru");
        })
    })

    describe("When replacing multiple characters with multiple characters", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll2("an", "eu");

            expect(result).toBe("Alexeudru");
        })
    })

    describe("When replacing the entire text", function () {
        it("returns the modified string", function () {
            var text = "Alex";
            var result = text.replaceAll2("Alex", "Vlad");

            expect(result).toBe("Vlad");
        })
    })

    describe("When the text does not contain the given characters", function () {
        it("returns the original string", function () {
            var text = "Alex";
            var result = text.replaceAll2("zzz", "aaa");

            expect(result).toBe("Alex");
        })
    })

    describe("When the string is shorter than the given characters", function () {
        it("returns the original string", function () {
            var text = "Alex";
            var result = text.replaceAll2("Alexandru", "Vlad");

            expect(result).toBe("Alex");
        })
    })

    describe("When the original string is empty", function () {
        it("returns empty string", function () {
            var text = "";
            var result = text.replaceAll2("Alex", "Vlad");

            expect(result).toBe("");
        })
    })

    describe("When the given characters are located at the beginning of the text", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll2("Alex", "Vlad");

            expect(result).toBe("Vladandru");
        })
    })

    describe("When the given characters are located at the end of the text", function () {
        it("returns the modified string", function () {
            var text = "Alexandru";
            var result = text.replaceAll2("andru", "andra");

            expect(result).toBe("Alexandra");
        })
    })
})