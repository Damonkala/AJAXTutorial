'use strict';

$(document).ready(init);

function init() {
	$('#send').click(sendRequest);
}

function sendRequest() {
	$.ajax({
		method: 'GET',
		url: "http://swapi.co/api/people/1",
		success: function(res) {
			console.log(res);
		}, error: function(error) {
			console.log(error.status, error.statusText);
		}
	})

	$.get('http://swapi.co/api/people/1', function(res, status){
		console.log(res, status);
	})
}
