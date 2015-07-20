module.exports = function(req, res) {
	console.log('addHotel');
	Hotel.create({Country: req.param('country'), Name: req.body.Name, Rooms: req.body.Rooms, Stars: req.body.Stars})
			.exec(function(err, result) {
				if (err) return res.serverError(err);
				return res.send(200);
			});
};