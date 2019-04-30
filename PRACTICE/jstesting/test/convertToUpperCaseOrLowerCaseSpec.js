describe("convertToUpperCaseOrLowerCase", function () {

	describe("When text is empty", function () {
		it("Returns empty string", function () {
			var text = "";
			var result = convertToUpperCaseOrLowerCase(text);

			expect(result).toBe("");
		})
	})

	describe("When text has only one word", function () {
		it("Returns one word", function () {
			var text = "Andreea";
			var result = convertToUpperCaseOrLowerCase(text);

			expect(result).toBe("aNDREEA");
		})
	})

	describe("When text has multiple words", function () {
		it("Returns multiple words", function () {
			var text = "Andreea si Ana";
			var result = convertToUpperCaseOrLowerCase(text);

			expect(result).toBe("aNDREEA SI aNA");
		})
	})

	describe("When text contains non-letters", function() {
		it("Keeps the non-letters", function() {
			var text = "468 )0";
			var result = convertToUpperCaseOrLowerCase(text);

			expect(result).toBe("468 )0");
		})
	})
}) 