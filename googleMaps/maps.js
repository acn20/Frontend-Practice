var map;

function initMap() {

    var airplanePositions = [{ lat: -27.467, lng: 153.027 }, { lat: -77.467, lng: 153.027 }, { lat: -27.467, lng: 103.027 }, { lat: -17.467, lng: 153.027 }, { lat: -87.467, lng: 173.027 }, { lat: -7.467, lng: 3.027 }, { lat: -15.467, lng: 53.027 }, { lat: -27.467, lng: 153.027 }, { lat: -7.467, lng: 113.027 }, { lat: 7.467, lng: 159.027 }];

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

    var flightPlanCoordinates = [
        { lat: -27.467, lng: 153.027 },
        { lat: -18.142, lng: 178.431 },
        { lat: 21.291, lng: -157.821 },
        { lat: 37.772, lng: -122.214 }
    ];

    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 1
    });

    flightPath.setMap(map);

    setInterval(function () {
        //airplaneMarker.setMap(null);
        for (let i = 0; i < airplaneMarkers.length; i++) {
            airplanePositions[i] = getCoordinates(airplanePositions[i].lat, airplanePositions[i].lng, 0.25, 0.75);
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

    return { lat: newLat, lng: newLng }
}

//if (latSpeed >= 180) { latSpeed = latSpeed%180 };
//if (lngSpeed >= 360) { lngSpeed = lngSpeed%360 };