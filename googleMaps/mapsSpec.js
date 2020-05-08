describe("getLat tests", function () {

    describe("When lat + speed is between -90 and 90 inclusive", function () {
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

describe("getLng tests", function () {

    describe("When lat + speed is between -180 and 180 inclusive", function () {
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
});

describe("getCoordinates tests", function () {
    describe("When lat + latSpeed is between -90 and 90 inclusive and lng + lngSpeed is between -180 and 180 inclusive", function () {
        describe("When lat is positive, lng is positive, latSpeed is positive, lngSpeed is positive", function () {
            it("Returns", function () {
                var lat = 10;
                var lng = 25;
                var latSpeed = 5;
                var lngSpeed = 10;
                var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

                expect(result).toEqual({ lat: 15, lng: 35 });
            })
        });

        describe("When lat is positive, lng is positive, latSpeed is negative, lngSpeed is negative", function () {
            it("Returns", function () {
                var lat = 10;
                var lng = 25;
                var latSpeed = -5;
                var lngSpeed = -10;
                var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

                expect(result).toEqual({ lat: 5, lng: 15 });
            })
        });
    });

    describe("When lat + latSpeed is greater than 90 and lng + lngSpeed is between -180 and 180 inclusive", function () {
        it("Returns", function () {
            var lat = 89;
            var lng = 25;
            var latSpeed = 5;
            var lngSpeed = 0;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 86, lng: -155 });
        });
    });

    describe("When lat + latSpeed is less than -90 and lng + lngSpeed is between -180 and 180 inclusive", function () {
        it("Returns", function () {
            var lat = -87;
            var lng = 25;
            var latSpeed = -5;
            var lngSpeed = 0;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -88, lng: -155 });
        })
    });

    describe("When lat + latSpeed is between -90 and 90 inclusive and lng + lngSpeed is greater than 180", function () {
        it("Returns", function () {
            var lat = 10;
            var lng = 175;
            var latSpeed = -5;
            var lngSpeed = 10;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 5, lng: -175 });
        })
    });

    describe("When lat + latSpeed is between -90 and 90 inclusive and lng + lngSpeed is less than -180", function () {
        it("Returns", function () {
            var lat = -10;
            var lng = -177;
            var latSpeed = 5;
            var lngSpeed = -10;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -5, lng: 173 });
        })
    });

    describe("When lat + latSpeed is less than -90 and lng + lngSpeed is less than -180", function () {
        it("Returns", function () {
            var lat = -88;
            var lng = -175;
            var latSpeed = -5;
            var lngSpeed = 0;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -87, lng: 5 });
        })
    });

    describe("When lat + latSpeed is greater than 90 and lng + lngSpeed is greater than 180", function () {
        it("Returns", function () {
            var lat = 86;
            var lng = 177;
            var latSpeed = 5;
            var lngSpeed = 0;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 89, lng: -3 });
        })
    });

    describe("When lat + latSpeed is less than -90 and lng + lngSpeed is greater than 180", function () {
        it("Returns", function () {
            var lat = -89;
            var lng = 175;
            var latSpeed = -5;
            var lngSpeed = 0;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -86, lng: -5 });
        })
    });

    describe("When lat + latSpeed is greater than 90 and lng + lngSpeed is less than -180", function () {
        it("Returns", function () {
            var lat = 89;
            var lng = -179;
            var latSpeed = 5;
            var lngSpeed = 0;
            var result = getCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 86, lng: 1 });
        })
    });

    describe("When lat is less than -90 or greater than 90", function () {
        it("Throws error", function () {
            var lat = -93;
            var lng = -179;
            var latSpeed = 5;
            var lngSpeed = 0;

            expect(function() {getCoordinates(lat, lng, latSpeed, lngSpeed)}).toThrow();
        })
    });

    describe("When lng is less than -180 or greater than 180", function () {
        it("Throws error", function () {
            var lat = -83;
            var lng = 199;
            var latSpeed = 5;
            var lngSpeed = 10;

            expect(function() {getCoordinates(lat, lng, latSpeed, lngSpeed)}).toThrow();
        })
    });

    describe("When latSpeed is less or equal than -180 or greater or equal than 180", function () {
        it("Throws error", function () {
            var lat = -90;
            var lng = -179;
            var latSpeed = 185;
            var lngSpeed = 0;

            expect(function() {getCoordinates(lat, lng, latSpeed, lngSpeed)}).toThrow();
        })
    });

    describe("When lngSpeed is less or equal than -360 or greater or equal than than 360", function () {
        it("Throws error", function () {
            var lat = -83;
            var lng = 180;
            var latSpeed = 5;
            var lngSpeed = -410;

            expect(function() {getCoordinates(lat, lng, latSpeed, lngSpeed)}).toThrow();
        })
    });
})