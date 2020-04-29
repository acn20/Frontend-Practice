function getLat(lat, speed) {
    let sum = lat + speed;
    if ((sum) <= 90 || (sum) >= -90) {
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
    if ((sum) <= 180 || (sum) >= -180) {
        return sum;
    }
    else {
        if (lng > 0 && speed > 0) {
            return -((180 - speed) + (180 - lng));
        }
        if (lng < 0 && speed < 0) { return (180 + speed) + (-lng - 180); }
    }

}

function getCoordinates(lat, lng, latSpeed, lngSpeed) {
    var newLat = lat;
    var newLng = lng;

    let sum1 = lat + latSpeed;
    if ((sum1) <= 90 || (sum1) >= -90) {
        newLat = sum1;
    }

    else {
        if (lat > 0 && latSpeed > 0) {
            newLat = (90 - latSpeed) + (90 - lat);
            if (lng > 0) {
                newLng = lng - 180;
            }
            else {
                newLng = lng + 180;
            }

        }
        if (lat < 0 && latSpeed < 0) {
            newLat = (-90 - latSpeed) + (-90 - lat);
            if (lng > 0) {
                newLng = lng - 180;
            }
            else {
                newLng = lng + 180;
            }
        }
    }

    let sum2 = lng + lngSpeed;
    if ((sum2) <= 180 || (sum2) >= -180) {
        newLng = sum2;
    }

    else {
        if (lng > 0 && lngSpeed > 0) {
            newLng = -((180 - lngSpeed) + (180 - lng));
        }
        if (lng < 0 && lngSpeed < 0) {
            newLng = (180 + lngSpeed) + (-lng - 180);
        }
    }

    return ([newLat, newLng]);

}