class Position {
	constructor(lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}
}

class Airport {
	constructor(city, position) {
		this.city = city;
		this.position = position;
	}
}

class Flight {
	constructor(position, marker, plan, polyline, speed) {
		this.position = position;
		this.marker = marker;
		this.plan = plan;
		this.polyline = polyline;
		this.speed = speed;
	}
}

const locations = [
	new Airport('London', new Position(51.47, -0.4543)),
	new Airport('New York', new Position(40.6413, -73.7781)),
	new Airport('Bucharest', new Position(44.5707, 26.0844)),
	new Airport('Dubai', new Position(25.2532, 55.3657)),
	new Airport('Rio', new Position(-22.8053, -43.2395)),
	new Airport('Melbourne', new Position(-37.8136, 144.9631)),
	new Airport('Tokyo', new Position(35.6762, 139.6503)),
	new Airport('Beijing', new Position(39.9042, 116.4074)),
	new Airport('Honolulu', new Position(21.3069, -157.8583)),
	new Airport('Los Angeles', new Position(34.0522, -118.2437)),
	new Airport('Cape Town', new Position(-33.9249, 18.4241)),
	new Airport('Johannesburg', new Position(-26.2041, 28.0473)),
	new Airport('Sao Paulo', new Position(-23.5505, -46.6333)),
	new Airport('Las Vegas', new Position(36.1699, -115.1398)),
	new Airport('Medellin', new Position(6.2486, -75.5742))
];

const flights = [];

function id(selector) {
	return document.getElementById(selector);
}

function setupDialog() {

	document.getElementById('addPlaneButton').addEventListener('click', function () {
		const dialogElem = document.getElementById('newPlaneDialog');
		dialogElem.classList.remove('hide');
	});

	function createOption(text, value) {
		const newOption = document.createElement("option");
		newOption.setAttribute("value", value);

		const textNode = document.createTextNode(text);
		newOption.appendChild(textNode);

		return newOption;
	};

	for (let i = 0; i < locations.length; i++) {
		const fromOption = createOption(locations[i].city, i);
		const toOption = createOption(locations[i].city, i);

		document.getElementById("start").appendChild(fromOption);
		document.getElementById("destination").appendChild(toOption);
	};

	document.getElementById("generatePath").addEventListener('click', function () {
		const i = document.getElementById("start").value;
		const j = document.getElementById("destination").value;

		const from = { lat: locations[i].position.lat, lng: locations[i].position.lng };
		const to = { lat: locations[j].position.lat, lng: locations[j].position.lng };

		const flightPlan = [from, to];

		const image = {
			path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
			scale: 4,
			strokeColor: '#FFFF00',
			rotation: 90,
		};
		const marker = new google.maps.Marker({
			position: from,
			map: map,
			icon: image
		});

		const path = new google.maps.Polyline({
			path: [from, to],
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 1
		});
		path.setMap(map);
		
		const speed = getSpeed(from.lat, from.lng, to.lat, to.lng);

		flights.push(new Flight(from, marker, flightPlan, path, speed));

		document.getElementById('newPlaneDialog').classList.add('hide');
	});
}

function registerDomReadyFunctions() {
	if (document.readyState !== 'loading') {
		setupDialog();
		return;
	}

	document.addEventListener("DOMContentLoaded", function () {
		setupDialog();
	});
}

registerDomReadyFunctions();


let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 51, lng: -1 },
		zoom: 4,
		mapTypeId: 'hybrid'
	});

	const baseVector = [1, 0];

	setInterval(function () {
		for (let i = 0; i < flights.length; i++) {
			newPosition = updatePosition(flights[i].position, flights[i].speed, flights[i].plan);

			flights[i].position = newPosition;
			flights[i].marker.setPosition(newPosition);

			const angle = getAngleBetweenVectors(baseVector, flights[i].speed);
			const icon = {
				path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				scale: 4,
				strokeColor: '#FFFF00',
			};
			if (flights[i].speed[1] < 0) {
				icon.rotation = -angle;
			}
			else {
				icon.rotation = angle;
			}
			flights[i].marker.setIcon(icon);
		}
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
	const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];
	const productOfModuluses = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]) * Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);
	const angleInRadians = Math.acos(dotProduct / productOfModuluses);
	return angleInRadians * 180 / Math.PI;//converting radians to degrees
}

