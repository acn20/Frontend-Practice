describe("getInitials Tests", function() {
	describe("When name has only one component", function() {
		it("Returns one letter", function() {
			var name = "Alex";
			var result = getInitials(name);
	
			expect(result).toBe("A");
		})
	})

	describe("When name has multiple components", function() {
		it("Returns multiple initials", function() {
			var name = "Andreea Corina";
			var result = getInitials(name);

			expect(result).toBe("AC");
		})

		describe("When some components are separated by a separator", function () {
			it("Returns multiple initials", function() {
				var name = "Ana-Maria Stanescu";
				var result = getInitials(name);
	
				expect(result).toBe("AMS");
			})
	
			it("Returns multiple initials", function () {
				var name = "Ryan O'Ryley"
				var result = getInitials(name);
	
				expect(result).toBe("ROR");
			})
		})
	})

	describe("When name is null", function() {
		it("Throws error", function() {
			var name = null;

			expect(function() { getInitials(name) }).toThrow();

			// function expect(fnc) {
			// 	try {
			// 		fnc();
			// 	}
			// 	catch(err) {
			// 		// do something 
			// 	}
			// }
		})
	})

	describe("When name is empty", function() {
		it("Throws error", function() {
			var name = "";

			expect(function() { getInitials(name) }).toThrow();
		})
	})

	describe("When name has only spaces", function () {
		it("Throws error", function () {
			var name = "   ";

			expect(function() { getInitials(name) }).toThrow();
		})
	})

	describe("When name is all caps", function() {
		// etc
		it("Returns multiple initials", function() {
			var name = "LAVINIA MILOSOVICI";
			var result = getInitials(name);

			expect(result).toBe("LM");
		})
	})

	describe("When name is all lowercase", function() {
		it("Returns multiple initials", function() {
			var name = "simona amanar";
			var result = getInitials(name);

			expect(result).toBe("SA");
		})
	})
})