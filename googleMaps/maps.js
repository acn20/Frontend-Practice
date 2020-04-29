var map;

        function initMap() {

            var airplanePosition = { lat: -27.467, lng: 153.027 };

            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -27.467, lng: 153.027 },
                zoom: 4,
                mapTypeId: 'hybrid'
            });

            var image = 'images/airplaneIcon.png';

            var airplaneMarker = new google.maps.Marker({
                position: airplanePosition,
                map: map,
                icon: image
            });

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
                airplanePosition.lat = getCoordinates.newLat;
                airplanePosition.lng = getCoordinates.newLng;
                airplaneMarker.setPosition(airplanePosition);
                //airplaneMarker.setMap(map);
            }, 100);

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
        }