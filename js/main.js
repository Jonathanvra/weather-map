"use strict";
//Weather
// $.get("http://api.openweathermap.org/data/2.5/weather", {
// 	APPID: OPEN_WEATHER_APPID,
// 	q:     "San Antonio, US"
// }).done(function(data) {
// 	console.log(data);
// });
// // Forecast
// $.get("http://api.openweathermap.org/data/2.5/forecast", {
// 	APPID: OPEN_WEATHER_APPID,
// 	q:     "San Antonio, US"
// }).done(function(data) {
// 	console.log(data);
// });
// ForeCast
let lat = 37.5665;
let long = 126.9780;
$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + OPEN_WEATHER_APPID + "&units=metric").done(function(data) {
	let reports = data.list;
	for(let i = 0; i < reports.length; i += 8) {
		// should get 5 objects back
		console.log(reports[i]);
	}
});

// One call
// $.get("http://api.openweathermap.org/data/2.5/onecall", {
// 	APPID: OPEN_WEATHER_APPID,
// 	lat:    29.423017,
// 	lon:   -98.48527,
// 	units: "imperial"
// }).done(function(data) {
// 	console.log('The entire response:', data);
// 	console.log('Diving in - here is current information: ', data.current);
// 	console.log('A step further - information for tomorrow: ', data.daily[1]);
// });
// MapBox
mapboxgl.accessToken = MAPBOX_APPID;
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v9',
	zoom: 10,
	center: [-98.4916, 29.4252]
});