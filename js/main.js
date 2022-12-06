"use strict";
// ForeCast
let lat = 29.4252;
let long = -98.4916;
$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + OPEN_WEATHER_APPID + "&units=imperial").done(function(data) {
	let reports = data.list;
	let html = "";
	for(let i = 0; i < reports.length; i += 8) {
		// should get 5 objects back
		console.log(reports[i]);
		html += "<div id='cards' class='col-sm-2'>";
		// html += "<p>" "</p>"
		html += "<p>Feels Like: " + reports[i].main.feels_like + "</p>";
		html += "<p>Date & Time: " + reports[i].dt_txt + "</p>";
		html += "<p>Min Temperature: " + reports[i].main.temp_min + "</p>";
		// html += "<p>Weather Report: " + reports[i].weather.{} + "</p>";
		html += "</div>"
	};
	html += "</p>"
	console.log(html);
	$("#container").html(html);
});

// MapBox
mapboxgl.accessToken = MAPBOX_APPID;
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v9',
	zoom: 10,
	center: [-98.480580, 29.494300]
});

var marker = new mapboxgl.Marker({
	draggable: true,
	color: "#19e813"
})
	.setLngLat([-98.600340, 29.591680])
	.addTo(map);