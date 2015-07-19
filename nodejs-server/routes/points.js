
/*
 * GET points
 * 
 */

exports.list = function(req, res){
	console.log('in points');
var point_test_bdx = {name: 'Opéra National de Bordeaux', country: 'France', city: 'Bordeaux', gps: {lat: '44.8420510', lng: '-0.575296999'}, type: '', time:'', link: '', description: '', gplace_id: 'ChIJhcDPRNonVQ0R4QCBEvkzM3U'};
var point_test_paris = {name: 'Paris', country: 'France', gps: 'xy', type: '', time:'', link: '', description: ''};
var pointslist = [point_test_bdx];

res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send(JSON.stringify(pointslist));
};