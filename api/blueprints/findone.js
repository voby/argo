var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');

module.exports = function (req, res) {
	var Model = actionUtil.parseModel(req);
	Model.find({Name: req.param('id')}).exec(function(err, result) {
  		if (err) return res.serverError(err);
  		return res.send(result);
  	});
};