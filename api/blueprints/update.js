var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');
module.exports = function (req, res) {
	console.log('update');
	var Model = actionUtil.parseModel(req);
  	Model.update({Name: req.param('id')}, req.body).exec(function(err, updated) {
  		if (err) return res.serverError(err);
  		return res.send(200);
  	});
};