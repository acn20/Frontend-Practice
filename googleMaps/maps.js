const locations = [
	{ city: "London", lat: 51.47, lng: -0.4543 },
	{ city: "New York", lat: 40.6413, lng: -73.7781 },
	{ city: "Bucharest", lat: 44.5707, lng: 26.0844 },
	{ city: "Dubai", lat: 25.2532, lng: 55.3657 },
	{ city: "Rio", lat: -22.8053, lng: -43.2395 },
	{ city: "Melbourne", lat: -37.8136, lng: 144.9631 },
	{ city: "Tokyo", lat: 35.6762, lng: 139.6503 },
	{ city: "Beijing", lat: 39.9042, lng: 116.4074 },
	{ city: "Honolulu", lat: 21.3069, lng: -157.8583 },
	{ city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
	{ city: "Cape Town", lat: -33.9249, lng: 18.4241 },
	{ city: "Johannesburg", lat: -26.2041, lng: 28.0473 },
	{ city: "Sao Paulo", lat: -23.5505, lng: -46.6333 },
	{ city: "Las Vegas", lat: 36.1699, lng: -115.1398 },
	{ city: "Medellin", lat: 6.2486, lng: -75.5742 }
];

// const London = { lat: 51.47, lng: -0.4543 };
// const NY = { lat: 40.6413, lng: -73.7781 };
// const Bucharest = { lat: 44.5707, lng: 26.0844 };
// const Dubai = { lat: 25.2532, lng: 55.3657 };
// const Rio = { lat: -22.8053, lng: -43.2395 };
// const Melbourne = { lat: -37.8136, lng: 144.9631 };
// const Tokyo = { lat: 35.6762, lng: 139.6503 };
// const Beijing = { lat: 39.9042, lng: 116.4074 };
// const Honolulu = { lat: 21.3069, lng: -157.8583 };
// const LosAngeles = { lat: 34.0522, lng: -118.2437 };
// const CapeTown = { lat: -33.9249, lng: 18.4241 };
// const Johannesburg = { lat: -26.2041, lng: 28.0473 };
// const SaoPaulo = { lat: -23.5505, lng: -46.6333 };
//const LasVegas = { lat: 36.1699, lng: -115.1398};
//const Medellin = { lat: 6.2486, lng: -75.5742};

// var airplanePositions = [London,
// 	Bucharest,
// 	NY,
// 	Melbourne,
// 	Dubai,
// 	Honolulu,
// 	London,
// 	Dubai,
// 	London,
// 	CapeTown];

const airplanePositions = [];
const airplaneMarkers = [];
const flightPlanCoordinates = [];
const flightPaths = [];
const airplaneSpeeds = [];

// var flightPlanCoordinates = [[
// 	London,
// 	NY
// ],
// [Bucharest, Dubai],
// [NY, Rio],
// [Melbourne, Tokyo],
// [Dubai, Beijing],
// [Honolulu, LosAngeles],
// [London, CapeTown],
// [Dubai, Johannesburg],
// [London, SaoPaulo],
// [CapeTown, SaoPaulo],
// ];

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

		const from = { lat: locations[i].lat, lng: locations[i].lng };
		const to = { lat: locations[j].lat, lng: locations[j].lng };

		flightPlanCoordinates.push([from, to]);
		airplanePositions.push(from);

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
		airplaneMarkers.push(marker);

		const path = new google.maps.Polyline({
			path: [from, to],
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 1
		});
		path.setMap(map);
		flightPaths.push(path);
		
		airplaneSpeeds.push(getSpeed(from.lat, from.lng, to.lat, to.lng));
		// flightPaths[i].setMap(map);

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


var map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 51, lng: -1 },
		zoom: 4,
		mapTypeId: 'hybrid'
	});

	// var img = 'images/airplaneIcon.png';

	// const airplaneMarkers = [];
	// for (let i = 0; i < airplanePositions.length; i++) {
		// const image = {
		// 	path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
		// 	scale: 4,
		// 	strokeColor: '#FFFF00',
		// 	rotation: 90,
		// };
		// airplaneMarkers.push(new google.maps.Marker({
		// 	position: airplanePositions[i],
		// 	map: map,
		// 	icon: image
		// }));
	// };
	const baseVector = [1, 0];

	// for (let i = 0; i < airplanePositions.length; i++) {
	// 	flightPaths.push(new google.maps.Polyline({
	// 		path: flightPlanCoordinates[i],
	// 		geodesic: true,
	// 		strokeColor: '#FF0000',
	// 		strokeOpacity: 1.0,
	// 		strokeWeight: 1
	// 	}));
	// 	flightPaths[i].setMap(map);
	// }

	// for (let i = 0; i < airplanePositions.length; i++) {
	// 	airplaneSpeeds.push(getSpeed(flightPlanCoordinates[i][0].lat, flightPlanCoordinates[i][0].lng, flightPlanCoordinates[i][1].lat, flightPlanCoordinates[i][1].lng));
	// }

	setInterval(function () {
		//airplaneMarker.setMap(null);
		for (let i = 0; i < airplaneMarkers.length; i++) {
			newPosition = updatePosition(airplanePositions[i], airplaneSpeeds[i], flightPlanCoordinates[i]);

			//console.log(airplaneSpeeds);
			//console.log(newPosition);

			airplanePositions[i] = newPosition;
			airplaneMarkers[i].setPosition(newPosition);

			const angle = getAngleBetweenVectors(baseVector, airplaneSpeeds[i]);
			const icon = {
				path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				scale: 4,
				strokeColor: '#FFFF00',
			};
			if (airplaneSpeeds[i][1] < 0) {
				icon.rotation = -angle;
			}
			else {
				icon.rotation = angle;
			}
			airplaneMarkers[i].setIcon(icon);
			//console.log(angle);
			//console.log(baseVector);
			//console.log(airplaneSpeeds[i]);

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
	const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1];
	const productOfModuluses = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]) * Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1]);
	const angleInRadians = Math.acos(dotProduct / productOfModuluses);
	return angleInRadians * 180 / Math.PI;//converting radians to degrees
}

