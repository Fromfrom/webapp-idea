
/*
 * GET cities listing.
 * TODO: store list dynamically and retrieve it
 */

exports.list = function(req, res){
var citylist = [{name: 'Paris', country: 'France'}];
  res.send(JSON.stringify(citylist));
};