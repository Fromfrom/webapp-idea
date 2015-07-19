
/*
 * GET story from its id listing.
 * 
 */

exports.list = function(req, res){
var citylist = [{name: 'Paris', country: 'France'}];
  res.send(JSON.stringify(citylist));
};