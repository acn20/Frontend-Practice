var map;

function initMap() {

    var airplanePositions = [{ lat: -27.467, lng: 153.027 },
    { lat: -77.467, lng: 153.027 },
    { lat: 27.467, lng: 103.027 },
    { lat: -17.467, lng: 153.027 },
    { lat: 24, lng: 113.027 },
    { lat: -7.467, lng: 3.027 },
    { lat: -17.45, lng: 178 },
    { lat: -57.467, lng: 103.027 },
    { lat: 56.467, lng: -2 },
    { lat: 7.467, lng: 159.5 }];
    //var airplaneSpeeds = [[0.3, -0.4], [0.4, 0.1], [0.2, -0.25], [0.3, -0.1], [0.5, 0.8], [0.2, -0.2], [-0.1, -0.4], [0.7, 0.15], [0.2, 1], [-1, 0.2]]

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -27.467, lng: 153.027 },
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
    }

    var flightPlanCoordinates = [[
        { lat: -27.467, lng: 153.027 },
        /*{ lat: -18.142, lng: 178.431 },
        { lat: 21.291, lng: -157.821 },*/
        { lat: 37.772, lng: -122.214 }
    ],
    [{ lat: -77.467, lng: 153.027 }, { lat: 80, lng: -156.278 }],
    [{ lat: 27.467, lng: 103.027 }, { lat: 55, lng: -178.9 }],
    [{ lat: -17.467, lng: 153.027 }, { lat: 47, lng: -9.2 }],
    [{ lat: 24, lng: 113.027 }, { lat: 77, lng: 5 }],
    [{ lat: -7.467, lng: 3.027 }, { lat: 39.5, lng: -12 }],
    [{ lat: -17.45, lng: 178 }, { lat: 32.7, lng: 67 }],
    [{ lat: -57.467, lng: 103.027 }, { lat: 45.2, lng: 82 }],
    [{ lat: 56.467, lng: -2 }, { lat: 85.25, lng: -172 }],
    [{ lat: 7.467, lng: 159.5 }, { lat: 50, lng: -45 }],
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
            airplanePositions[i] = getCoordinates(airplanePositions[i].lat, airplanePositions[i].lng, airplaneSpeeds[i][0], airplaneSpeeds[i][1]);
            airplaneMarkers[i].setPosition(airplanePositions[i]);
        }
        //airplaneMarker.setMap(map);
    }, 100);

}


function getLat(lat, speed) {
    let sum = lat + speed;
    if (sum >= -90 && sum <= 90) {
        return sum;
    }
    else {
        if (lat > 0 && speed > 0) {
            return (90 - speed) + (90 - lat);
        }
        if (lat < 0 && speed < 0) {
            return (-90 - speed) + (-90 - lat);
        }
    }
}

function getLng(lng, speed) {
    let sum = lng + speed;
    if (sum >= -180 && sum <= 180) {
        return sum;
    }
    else {
        if (lng > 0 && speed > 0) {
            return -((180 - speed) + (180 - lng));
        }
        if (lng < 0 && speed < 0) {
            return (180 + speed) + (180 + lng);
        }
    }
}

function getCoordinates(lat, lng, latSpeed, lngSpeed) {

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
    }

    return { lat: newLat, lng: newLng };

    function getSpeed(startLat, startLng, destinationLat, destinationLng) {
        const latAxis = destinationLat - startLat;
        const lngAxis = destinationLng - startLng;
        const divideFactor = Math.sqrt(Math.pow(latAxis, 2) + Math.pow(lngAxis, 2));//vector modulus
        return [latAxis / divideFactor, lngAxis / divideFactor]
    }
}

//if (latSpeed >= 180) { latSpeed = latSpeed%180 };
//if (lngSpeed >= 360) { lngSpeed = lngSpeed%360 };
/*function getSpeed(startLat, startLng, destinationLat, destinationLng) {
    const latAxis = destinationLat - startLat;
    const lngAxis = destinationLng - startLng;
    const divideFactor = Math.sqrt(Math.pow(latAxis, 2) + Math.pow(lngAxis, 2));//vector modulus
    return [latAxis / divideFactor, lngAxis / divideFactor]
}*/