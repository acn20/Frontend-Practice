describe("getDaysToChristmas", function () {
    describe("When date is 25 December", function () {
        it("Returns 0", function () {
            var days = getDaysToChristmas({ getDate: function () { return new Date(2018, 11, 25) } });

            expect(days).toBe(0);
        })
    })

    describe("When date is 24 December", function () {
        it("Returns 1", function () {
            var days = getDaysToChristmas({ getDate: () => new Date(2018, 11, 24) });

            expect(days).toBe(1);
        })
    })

    describe("When date is 26 December", function () {
        describe("when the following year is a regular year", function () {
            it("Returns 364", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(2018, 11, 26) } });

                expect(days).toBe(364);
            })
        })

        describe("When the following year is leap year", function () {
            it("Returns 365", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(1999, 11, 26) } });

                expect(days).toBe(365);
            })
        })
    })

    describe("When date is after 26th of December", function () {
        describe("when next year is a regular year", function () {
            it("Returns a value like any other regular year", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(2018, 11, 29) } });

                expect(days).toBe(361);
            })
        })

        describe("When next year is leap year", function () {
            it("Returns a value with one day more", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(1999, 11, 29) } });

                expect(days).toBe(362);
            })
        })
    })

    describe("When current year is leap year", function () {
        describe("when date is before 29th of February", function () {
            it("Returns a value with one day more", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(2000, 1, 27) } });

                expect(days).toBe(302);
            })
        })

        describe("when date is 29th of February", function () {
            it("Returns 300", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(2000, 1, 29) } });

                expect(days).toBe(300);
            })
        })

        describe("when date is after 29th of February", function () {
            it("Returns the same value as a regular year", function () {
                var days = getDaysToChristmas({ getDate: function () { return new Date(2000, 2, 29) } });

                expect(days).toBe(271);
            })
        })

    })
})

describe("getDaysToChristmas2", function () {
    describe("When date is 25 December", function () {
        it("Returns 0", function () {
            var days = getDaysToChristmas2({ getDate: function () { return new Date(2018, 11, 25) } });

            expect(days).toBe(0);
        })
    })

    describe("When date is 24 December", function () {
        it("Returns 1", function () {
            var days = getDaysToChristmas2({ getDate: () => new Date(2018, 11, 24) });

            expect(days).toBe(1);
        })
    })

    describe("When date is 26 December", function () {
        describe("when the following year is a regular year", function () {
            it("Returns 364", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(2018, 11, 26) } });

                expect(days).toBe(364);
            })
        })

        describe("When the following year is leap year", function () {
            it("Returns 365", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(1999, 11, 26) } });

                expect(days).toBe(365);
            })
        })
    })

    describe("When date is after 26th of December", function () {
        describe("when next year is a regular year", function () {
            it("Returns a value like any other regular year", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(2018, 11, 29) } });

                expect(days).toBe(361);
            })
        })

        describe("When next year is leap year", function () {
            it("Returns a value with one day more", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(1999, 11, 29) } });

                expect(days).toBe(362);
            })
        })
    })

    describe("When current year is leap year", function () {
        describe("when date is before 29th of February", function () {
            it("Returns a value with one day more", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(2000, 1, 27) } });

                expect(days).toBe(302);
            })
        })

        describe("when date is 29th of February", function () {
            it("Returns 300", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(2000, 1, 29) } });

                expect(days).toBe(300);
            })
        })

        describe("when date is after 29th of February", function () {
            it("Returns the same value as a regular year", function () {
                var days = getDaysToChristmas2({ getDate: function () { return new Date(2000, 2, 29) } });

                expect(days).toBe(271);
            })
        })

    })
})
