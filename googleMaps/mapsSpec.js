describe("getNewCoordinates tests", function () {
    describe("When lat + latSpeed is between -90 and 90 inclusive and lng + lngSpeed is between -180 and 180 inclusive", function () {
        describe("When lat is positive, lng is positive, latSpeed is positive, lngSpeed is positive", function () {
            it("Returns", function () {
                var lat = 10;
                var lng = 25;
                var latSpeed = 5;
                var lngSpeed = 10;
                var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

                expect(result).toEqual({ lat: 15, lng: 35 });
            })
        });

        describe("When lat is positive, lng is positive, latSpeed is negative, lngSpeed is negative", function () {
            it("Returns", function () {
                var lat = 10;
                var lng = 25;
                var latSpeed = -5;
                var lngSpeed = -10;
                var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

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
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 86, lng: -155 });
        });
    });

    describe("When lat + latSpeed is less than -90 and lng + lngSpeed is between -180 and 180 inclusive", function () {
        it("Returns", function () {
            var lat = -87;
            var lng = 25;
            var latSpeed = -5;
            var lngSpeed = 0;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -88, lng: -155 });
        })
    });

    describe("When lat + latSpeed is between -90 and 90 inclusive and lng + lngSpeed is greater than 180", function () {
        it("Returns", function () {
            var lat = 10;
            var lng = 175;
            var latSpeed = -5;
            var lngSpeed = 10;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 5, lng: -175 });
        })
    });

    describe("When lat + latSpeed is between -90 and 90 inclusive and lng + lngSpeed is less than -180", function () {
        it("Returns", function () {
            var lat = -10;
            var lng = -177;
            var latSpeed = 5;
            var lngSpeed = -10;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -5, lng: 173 });
        })
    });

    describe("When lat + latSpeed is less than -90 and lng + lngSpeed is less than -180", function () {
        it("Returns", function () {
            var lat = -88;
            var lng = -175;
            var latSpeed = -5;
            var lngSpeed = 0;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -87, lng: 5 });
        })
    });

    describe("When lat + latSpeed is greater than 90 and lng + lngSpeed is greater than 180", function () {
        it("Returns", function () {
            var lat = 86;
            var lng = 177;
            var latSpeed = 5;
            var lngSpeed = 0;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 89, lng: -3 });
        })
    });

    describe("When lat + latSpeed is less than -90 and lng + lngSpeed is greater than 180", function () {
        it("Returns", function () {
            var lat = -89;
            var lng = 175;
            var latSpeed = -5;
            var lngSpeed = 0;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: -86, lng: -5 });
        })
    });

    describe("When lat + latSpeed is greater than 90 and lng + lngSpeed is less than -180", function () {
        it("Returns", function () {
            var lat = 89;
            var lng = -179;
            var latSpeed = 5;
            var lngSpeed = 0;
            var result = getNewCoordinates(lat, lng, latSpeed, lngSpeed);

            expect(result).toEqual({ lat: 86, lng: 1 });
        })
    });

    describe("When lat is less than -90 or greater than 90", function () {
        it("Throws error", function () {
            var lat = -93;
            var lng = -179;
            var latSpeed = 5;
            var lngSpeed = 0;

            expect(function () { getNewCoordinates(lat, lng, latSpeed, lngSpeed) }).toThrow();
        })
    });

    describe("When lng is less than -180 or greater than 180", function () {
        it("Throws error", function () {
            var lat = -83;
            var lng = 199;
            var latSpeed = 5;
            var lngSpeed = 10;

            expect(function () { getNewCoordinates(lat, lng, latSpeed, lngSpeed) }).toThrow();
        })
    });

    describe("When latSpeed is less or equal than -180 or greater or equal than 180", function () {
        it("Throws error", function () {
            var lat = -90;
            var lng = -179;
            var latSpeed = 185;
            var lngSpeed = 0;

            expect(function () { getNewCoordinates(lat, lng, latSpeed, lngSpeed) }).toThrow();
        })
    });

    describe("When lngSpeed is less or equal than -360 or greater or equal than than 360", function () {
        it("Throws error", function () {
            var lat = -83;
            var lng = 180;
            var latSpeed = 5;
            var lngSpeed = -410;

            expect(function () { getNewCoordinates(lat, lng, latSpeed, lngSpeed) }).toThrow();
        })
    });
});

describe("getSpeed tests", function () {
    describe("When all parameters are positive", function () {
        it("Returns", function () {
            var startLat = 47;
            var startLng = 96;
            var destinationLat = 50;
            var destinationLng = 100;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([0.6, 0.8]);
        });
    });

    describe("When startLat and destinationLat are negative", function () {
        it("Returns", function () {
            var startLat = -47;
            var startLng = 96;
            var destinationLat = -50;
            var destinationLng = 100;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([-0.6, 0.8]);
        });
    });

    describe("When the plane passes through the date change line", function () {
        it("Returns", function () {
            var startLat = 47;
            var startLng = 179;
            var destinationLat = 50;
            var destinationLng = -177;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([0.6, 0.8]);
        });
    });

    describe("When the plane passes through the date change line", function () {
        it("Returns", function () {
            var startLat = 47;
            var startLng = -179;
            var destinationLat = 50;
            var destinationLng = 177;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([0.6, -0.8]);
        });
    });

    describe("When the plane passes through the North Pole", function () {
        it("should always return [1, 0] until the North Pole and than [-1, 0]", function () {
            var startLat = 89;
            var startLng = 1;
            var destinationLat = 86;
            var destinationLng = -179;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([1, 0]);
        });
    });

    describe("When the plane passes through the South Pole", function () {
        it("should always return [-1, 0] until the South Pole and than [1, 0]", function () {
            var startLat = -89;
            var startLng = -1;
            var destinationLat = -86;
            var destinationLng = 179;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([-1, 0]);
        });
    });

    describe("When the plane passes through the Ecuator", function () {
        it("Returns", function () {
            var startLat = -2;
            var startLng = 96;
            var destinationLat = 1;
            var destinationLng = 100;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([0.6, 0.8]);
        });
    });

    describe("When the plane passes through 0 meridian", function () {
        it("Returns", function () {
            var startLat = 47;
            var startLng = -2;
            var destinationLat = 50;
            var destinationLng = 2;
            var result = getSpeed(startLat, startLng, destinationLat, destinationLng);

            expect(result).toEqual([0.6, 0.8]);
        });
    });
});

describe("updatePosition tests", function () {
    describe("When the current position is at the beginning of the path", function () {
        const original = getNewCoordinates;

        beforeEach(() => {
            getNewCoordinates = function () {
                return { lat: 1.1456, lng: 3.4678 };
            };
        });

        afterEach(() => {
            getNewCoordinates = original;
        });

        it("returns the coordinates computed by getNewCoordinates", function () {
            var position = { lat: 51.47, lng: -0.4543 };
            var speed = [-0.146098651846783, -0.9892700257910135];
            var path = [{ lat: 51.47, lng: -0.4543 }, { lat: 40.6413, lng: -73.7781 }];
            var result = updatePosition(position, speed, path);

            expect(result).toEqual({ lat: 1.1456, lng: 3.4678 });
        });
    });

    describe("When lat speed >= 0 and lng speed >= 0", function () {
        it("returns the destination coordinates", function () {
            var position = { lat: 75, lng: -75.25 };
            var speed = [0.5, 0.5];
            var path = [{ lat: 50, lng: -125 }, { lat: 85, lng: -75 }];
            var result = updatePosition(position, speed, path);

            expect(result).toEqual({ lat: 85, lng: -75 });
        });
    });

    describe("When lat speed <= 0 and lng speed >= 0", function () {
        it("returns the destination coordinates", function () {
            var position = { lat: 35.25, lng: -80.25 };
            var speed = [-0.5, 0.5];
            var path = [{ lat: 50, lng: -125 }, { lat: 35, lng: -75 }];
            var result = updatePosition(position, speed, path);

            expect(result).toEqual({ lat: 35, lng: -75 });
        });
    });

    describe("When lat speed <= 0 and lng speed <= 0", function () {
        it("returns the destination coordinates", function () {
            var position = { lat: 35.25, lng: -60.25 };
            var speed = [-0.5, -0.5];
            var path = [{ lat: 50, lng: -25 }, { lat: 35, lng: -75 }];
            var result = updatePosition(position, speed, path);

            expect(result).toEqual({ lat: 35, lng: -75 });
        });
    });

    describe("When lat speed >= 0 and lng speed <= 0", function () {
        it("returns the destination coordinates", function () {
            var position = { lat: 75.25, lng: -74.75 };
            var speed = [0.5, -0.5];
            var path = [{ lat: 50, lng: -25 }, { lat: 85, lng: -75 }];
            var result = updatePosition(position, speed, path);

            expect(result).toEqual({ lat: 85, lng: -75 });
        });
    });

});

describe("getAngleBetweenVectors tests", function () {
    describe("When", function () {
        it("returns", function () {
            var vector1 = [1, 0];
            var vector2 = [1, 0];
            var result = getAngleBetweenVectors(vector1, vector2);

            expect(result).toBe(0);
        });
    });

    describe("When", function () {
        it("returns", function () {
            var vector1 = [1, 0];
            var vector2 = [0, 1];
            var result = getAngleBetweenVectors(vector1, vector2);

            expect(result).toBe(90);
        });
    });

    describe("When", function () {
        it("returns", function () {
            var vector1 = [1, 0];
            var vector2 = [1, 1];
            var result = getAngleBetweenVectors(vector1, vector2);

            expect(result).toBeCloseTo(45, 5);
        });
    });

    describe("When", function () {
        it("returns", function () {
            var vector1 = [1, 0];
            var vector2 = [-1, 0];
            var result = getAngleBetweenVectors(vector1, vector2);

            expect(result).toBe(180);
        });
    });
});
