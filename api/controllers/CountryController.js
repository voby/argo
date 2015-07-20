/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAll: function(req, res) {
		Country.find().exec(function(err, result) {
			if (err) return res.serverError(err);
			return res.send(result);
		});	
	},
	addCountry: function(req, res) {
		Country.create(req.body).exec(function(err, result) {
			if (err) return res.serverError(err);
			return res.send(200);
		})
	},
};

