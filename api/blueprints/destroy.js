var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil.js');
module.exports = function (req, res) {
	console.log('destroy');
	var Model = actionUtil.parseModel(req);
	Model.destroy({Name: req.param('id')}).exec(function(err, removed) {
  		if (err) return res.serverError(err);
  		return res.send(200);
  	});
};