define([], function () {
var google = '';
var gl_map = '';
var gl_infoWindow = '';
var gl_www = 'http://localhost:3000'; // webservice url for data retrieval (nodeJS server)
var gl_startCoordinates = {lat: 44.842051, lng: -0.575296};

var gl_testpoint = {};

	function query(type, value)
	{
		var xmlHttp = new XMLHttpRequest();
		var url = gl_www;		//global webservice url
		if (type === 'point')	//route specialization
		{
			url += '/points';
			if (value)
			{
			url += '?' + value;
			}
		}
		    
		xmlHttp.open( "GET", url, false );	//todo -> asynchronous = true
		xmlHttp.send();
		return xmlHttp.responseText;
	}
	
	
	/* Creates marker from API object (or default one)
	*/
	function getMarker(api_object)
	{
		var marker;
		if (api_object !== 'undefined' && api_object.gps && api_object.gps.lat && api_object.gps.lng && api_object.name)
		{
			console.log('OK: creating marker!');
			marker = new google.maps.Marker({
			  position: new google.maps.LatLng(api_object.gps.lat, api_object.gps.lng),
			  map: gl_map,
			  title: api_object.name
		  });
		  return marker;
		}
			console.log('warning: creating marker with default values');
			marker = new google.maps.Marker({
			  position: new google.maps.LatLng(-25.363882,131.044922),
			  map: gl_map,
			  title: 'Default Marker'
		  });
		return marker;
	}

	
	/* Generate an info window from an API object
	*	Binds it to a click on marker if passed into parameter (otherwise creates it)
	*/
	function infoWindow(api_object, marker){
		console.log('in infoWindow');
		  var contentString = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h1 id="firstHeading" class="firstHeading">' + api_object.name + '</h1>'+
		  '<div id="bodyContent">'+
		  '<p><b>' + api_object.name + '</b></p> Bla Bla Bla ' +
		  '</div>'+
		  '</div>';

	  var infowindow = new google.maps.InfoWindow({
		  content: contentString
	  });

		if (typeof marker === 'undefined')	//creates a new marker if no parameter
		{marker = getMarker(api_object);}
		google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(gl_map,marker);
	  });
	  console.log('out infoWindow');
	};
	
	/*Test
	*/
	function getPointDemo()
	{
	var points = JSON.parse(query('point'));
	var point = points[0];
	infoWindow(point);
	
	}

    return {
        init: function (goog) {
            'use strict';
			google = goog;
			var mapOptions = {zoom: 17, center: gl_startCoordinates};
			gl_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			getPointDemo();
		}

    };
});
