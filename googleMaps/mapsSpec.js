describe("maps latitude tests", function () {

    describe("When lat + speed is between or equal -90 and 90", function () {
        describe("When lat is positive and speed is positive", function () {
            it("Returns positive", function () {
                var lat = 13;
                var speed = 3;
                var result = getLat(lat, speed);
    
                expect(result).toBe(16);
            })
        });
    
        describe("When lat is positive and speed is negative", function () {
            it("Returns either positive or negative", function () {
                var lat = 13;
                var speed = -3;
                var result = getLat(lat, speed);
    
                expect(result).toBe(10);
            })
        });
    
        describe("When lat is negative and speed is negative", function () {
            it("Returns negative", function () {
                var lat = -13;
                var speed = -3;
                var result = getLat(lat, speed);
    
                expect(result).toBe(-16);
            })
        });
    
        describe("When lat is negative and speed is positive", function () {
            it("Returns either positive or negative", function () {
                var lat = -13;
                var speed = 3;
                var result = getLat(lat, speed);
    
                expect(result).toBe(-10);
            })
        });
    });

    describe("When lat + speed is greater than 90", function () {
        it("Returns either positive or negative", function () {
            var lat = 83;
            var speed = 10;
            var result = getLat(lat, speed);

            expect(result).toBe(87);
        })
    });

    describe("When lat + speed is less than -90", function () {
        it("Returns either positive or negative", function () {
            var lat = -83;
            var speed = -10;
            var result = getLat(lat, speed);

            expect(result).toBe(-87);
        })
    });
})

describe("maps longitude tests", function () {

    describe("When lat + speed is between or equal -180 and 180", function () {
        describe("When lng is positive and speed is positive", function () {
            it("Returns positive", function () {
                var lng = 13;
                var speed = 3;
                var result = getLng(lng, speed);
    
                expect(result).toBe(16);
            })
        });
    
        describe("When lng is positive and speed is negative", function () {
            it("Returns either positive or negative", function () {
                var lng = 13;
                var speed = -3;
                var result = getLng(lng, speed);
    
                expect(result).toBe(10);
            })
        });
    
        describe("When lng is negative and speed is negative", function () {
            it("Returns negative", function () {
                var lng = -13;
                var speed = -3;
                var result = getLng(lng, speed);
    
                expect(result).toBe(-16);
            })
        });
    
        describe("When lng is negative and speed is positive", function () {
            it("Returns either positive or negative", function () {
                var lng = -13;
                var speed = 3;
                var result = getLng(lng, speed);
    
                expect(result).toBe(-10);
            })
        });
    });

    describe("When lng + speed is greater than 180", function () {
        it("Returns negative", function () {
            var lng = 173;
            var speed = 10;
            var result = getLng(lng, speed);

            expect(result).toBe(-177);
        })
    });

    describe("When lng + speed is less than -180", function () {
        it("Returns positive", function () {
            var lng = -173;
            var speed = -10;
            var result = getLng(lng, speed);

            expect(result).toBe(177);
        })
    });
})