/**
 * HotelController
 *
 * @description :: Server-side logic for managing Hotels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAll: function(req, res) {
		Hotel.find({Country: req.param('country')})
			.exec(function(err, result) {
				if (err) return res.serverError(err);
				return res.send(result);
			});
	},
	addHotel: function(req, res) {
		Hotel.create({Country: req.param('country'), Name: req.body.Name, Rooms: req.body.Rooms, Stars: req.body.Stars})
			.exec(function(err, result) {
				if (err) return res.serverError(err);
				return res.send(200);
			});
	},
	getHotel: function(req, res) {
		Hotel.findOne({Name: req.param('hotel')})
			.exec(function(err, result) {
				if (err) return res.serverError(err);
				return res.send(result);
			});
	},
	updateHotel: function(req, res) {
		Hotel.update({Name: req.param('hotel')}, req.body)
			.exec(function(err, updated) {
				if (err) return res.serverError(err);
				return res.send(200);
			});
	},
	removeHotel: function(req, res) {
		Hotel.destroy({Name: req.param('hotel')})
			.exec(function(err, removed) {
				if (err) return res.serverError(err);
				return res.send(200);
			});
	},
};

