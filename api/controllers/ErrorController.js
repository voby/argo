/**
 * ErrorController
 *
 * @description :: Server-side logic for managing Errors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	defaultError: function(req, res) {
		switch (req.param('error')) {
			case '404':
				return res.notFound();
			case '400':
				return res.badRequest(null, {view: '400'});
			case '403':
				return res.forbidden();
			case '500':
				return res.serverError();
			default:
				return res.notFound();
		}
	},
	customError: function(req, res) {
		switch (req.param('error')) {
			case '404':
				return res.notFound(req.param('message'), {view: '404'});
			case '400':
				return res.badRequest(req.param('message'), {view: '400'});
			case '403':
				return res.forbidden(req.param('message'), {view: '403'});
			case '500':
				return res.serverError(req.param('message'), {view: '500'});
			default:
				return res.notFound();
		}
	}
};

