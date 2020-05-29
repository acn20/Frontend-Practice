var map;

function initMap() {

    var airplanePositions = [{ lat: 51.47, lng: -0.4543 },
    /*{ lat: -77, lng: 153 },
    { lat: 27, lng: 103 },
    { lat: -17, lng: 153 },
    { lat: 24, lng: 113 },
    { lat: -7, lng: 3 },
    { lat: -17.45, lng: 178 },
    { lat: -57, lng: 103 },
    { lat: 56, lng: -2 },
    { lat: 7, lng: 159.5 }*/];

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51, lng: -1 },
        zoom: 4,
        mapTypeId: 'hybrid'
    });

    var image = 'images/airplaneIcon.png';

    const airplaneMarkers = [];
    for (let i = 0; i < airplanePositions.length; i++) {
        airplaneMarkers.push(new google.maps.Marker({
            position: airplanePositions[i],
            map: map,
            icon: image
        }));
    };

    /*const icon = marker.getIcon();
    const angle = calculateAngle(unitSpeed, baseVector);
    icon.rotation = angle;

    marker.setIcon(icon);*/

    var flightPlanCoordinates = [[
        { lat: 51.47, lng: -0.4543 },
        { lat: 40.6413, lng: -73.7781 }
    ],
        /*[{ lat: -77, lng: 153 }, { lat: 80, lng: -156.278 }],
        [{ lat: 27, lng: 103 }, { lat: 55, lng: -178.9 }],
        [{ lat: -17, lng: 153 }, { lat: 47, lng: -9.2 }],
        [{ lat: 24, lng: 113 }, { lat: 77, lng: 5 }],
        [{ lat: -7, lng: 3 }, { lat: 39.5, lng: -12 }],
        [{ lat: -17.45, lng: 178 }, { lat: 32.7, lng: 67 }],
        [{ lat: -57, lng: 103 }, { lat: 45.2, lng: 82 }],
        [{ lat: 56, lng: -2 }, { lat: 85.25, lng: -172 }],
        [{ lat: 7, lng: 159.5 }, { lat: 50, lng: -45 }],*/
    ];

    var flightPaths = [];
    for (let i = 0; i < airplanePositions.length; i++) {
        flightPaths.push(new google.maps.Polyline({
            path: flightPlanCoordinates[i],
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 1
        }));
        flightPaths[i].setMap(map);
    }

    var airplaneSpeeds = [];
    for (let i = 0; i < airplanePositions.length; i++) {
        airplaneSpeeds.push(getSpeed(flightPlanCoordinates[i][0].lat, flightPlanCoordinates[i][0].lng, flightPlanCoordinates[i][1].lat, flightPlanCoordinates[i][1].lng));
    }

    setInterval(function () {
        //airplaneMarker.setMap(null);
        for (let i = 0; i < airplaneMarkers.length; i++) {
            newPosition = updatePosition(airplanePositions[i], airplaneSpeeds[i], flightPlanCoordinates[i]);

            //console.log(airplaneSpeeds);
            //console.log(newPosition);

            airplanePositions[i] = newPosition;
            airplaneMarkers[i].setPosition(newPosition);
        }
        //airplaneMarker.setMap(map);
    }, 100);
    //We update every position with the next coordinates on the flight path. If the computed position is beyond the destination, the position will be set to stop at the destination.
}

function getNewCoordinates(lat, lng, latSpeed, lngSpeed) {

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        throw new Error("The latitude must be between -90 or 90 inclusive and the longitude must be between -180 and 180 inclusive");
    }

    if (latSpeed <= -180 || latSpeed >= 180 || lngSpeed <= -360 || lngSpeed >= 360) {
        throw new Error("Please do not exceed (-180, 180) interval for latitude speed and (-360, 360) interval for longitude speed");
    }

    var newLat = lat;
    var newLng = lng;

    let sum1 = lat + latSpeed;
    let sum2 = lng + lngSpeed;

    if (sum1 >= -90 && sum1 <= 90) {
        newLat = sum1;
        if (sum2 >= -180 && sum2 <= 180) {
            newLng = sum2;
        }
        else {
            if (lng > 0 && lngSpeed > 0) {
                newLng = -((180 - lngSpeed) + (180 - lng));
            }
            if (lng < 0 && lngSpeed < 0) {
                newLng = (180 + lngSpeed) + (180 + lng);
            }
        };
    }
    else {
        if (lat > 0 && latSpeed > 0) {
            newLat = (90 - latSpeed) + (90 - lat);

        };
        if (lat < 0 && latSpeed < 0) {
            newLat = (-90 - latSpeed) + (-90 - lat);
        };
        if (lng > 0) {
            newLng = lng - 180;
        }
        else {
            newLng = lng + 180;
        };
        if (lngSpeed == 0) {
            latSpeed = -latSpeed;
        };
    }

    return { lat: newLat, lng: newLng };
}

function getSpeed(startLat, startLng, destinationLat, destinationLng) {
    var latAxis = destinationLat - startLat;
    var lngAxis = destinationLng - startLng;

    if (lngAxis == 180 || lngAxis == -180) {
        if (startLat > 0 && (((90 - startLat) + (90 - destinationLat)) + startLat) > 90) {
            return [1, 0]
        };

        if (startLat < 0 && (((-90 - startLat) + (-90 - destinationLat)) + startLat) < -90) {
            return [-1, 0]
        };
    }

    if (lngAxis > 180) {
        lngAxis = lngAxis - 360;
    };
    if (lngAxis < -180) {
        lngAxis = lngAxis + 360;
    }
    const divideFactor = Math.sqrt(Math.pow(latAxis, 2) + Math.pow(lngAxis, 2));//vector modulus
    return [latAxis / divideFactor, lngAxis / divideFactor]
}

//if (latSpeed >= 180) { latSpeed = latSpeed%180 };
//if (lngSpeed >= 360) { lngSpeed = lngSpeed%360 };

function updatePosition(position, speed, path) {
    if (speed[0] >= 0 && speed[1] >= 0) {
        if (position.lat > (path[1].lat - speed[0]) || position.lng > (path[1].lng - speed[1])) {
            return path[1];
        }
    }
    if (speed[0] <= 0 && speed[1] >= 0) {
        if (position.lat < (path[1].lat - speed[0]) || position.lng > (path[1].lng - speed[1])) {
            return path[1];
        }
    }
    if (speed[0] >= 0 && speed[1] <= 0) {
        if (position.lat > (path[1].lat - speed[0]) || position.lng < (path[1].lng - speed[1])) {
            return path[1];
        }
    }
    if (speed[0] <= 0 && speed[1] <= 0) {
        if (position.lat < (path[1].lat - speed[0]) || position.lng < (path[1].lng - speed[1])) {
            return path[1];
        }
    }

    return getNewCoordinates(position.lat, position.lng, speed[0], speed[1]);
};

function getAngleBetweenVectors(vector1, vector2) {
    //a = acos ( (V * W) / (|V| * |W|) )//numitorul e 1
    //vector1 = [1, 0];
    //V = (v1, v2) si W = (w1, w2) ==> dot product = v1 * w1 + v2 * w2
    //vector1 is the direction my plane is initially orientated ((1, 0)), and vector2 is the speed (a vector orientated towards the destination)
    const angleInRadians = Math.acos(((vector1[0] * vector2[0]) + (vector1[1] * vector2[1])) / (Math.sqrt(Math.pow(vector1[0], 2) + Math.pow(vector1[1], 2)) * (Math.sqrt(Math.pow(vector2[0], 2) + Math.pow(vector2[1], 2)))));
    return angleInRadians * 180 / Math.PI;//converting radians to degrees
}

