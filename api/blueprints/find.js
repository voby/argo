var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');

module.exports = function (req, res) {
	console.log('find');
	var Model = actionUtil.parseModel(req);
	if ( actionUtil.parsePk(req) ) {
    	return require('./findOne')(req,res);
  	}

  	Model.find().exec(function(err, result) {
  		if (err) return res.serverError(err);
  		return res.send(result);
  	});
};