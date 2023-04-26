"use strict";

const app = {
	map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
	init() {
		// initialise de kaart
		var map = L.map("map").setView([50.8467, 4.3525], 13);
		// voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png

		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
		// vergeet openstreetmap attributie niet
		var marker = L.marker([50.84238495401332, 4.3226450626747575]).addTo(map);

		// gebruik de functie "loadMarkers" om de markers toe te voegen
		this.loadMarkers();
	},
	loadMarkers() {
		// fetch de data van opendata.brussels.be
		fetch(
			"https://opendata.brussels.be/api/records/1.0/search/?dataset=atms&q="
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			});

		// als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
	},
	addMarker(lat, lon) {
		// voeg een marker toe op lat, lon
	},
};

app.init();
