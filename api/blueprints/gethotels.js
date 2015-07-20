module.exports = function(req, res) {
	console.log('gethotels!!');
	Hotel.find({Country: req.param('country')})
			.exec(function(err, result) {
				if (err) return res.serverError(err);
				return res.send(result);
			});
};