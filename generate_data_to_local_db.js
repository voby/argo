var fs = require('fs');
var casual = require('casual');
var Factory = require('rosie').Factory;
var _ = require('lodash');

var dbPath = '.tmp/localDiskDb.db';
var countries = [];
var hotels = [];

Factory.define('Countries')
	.sequence('Name', function() {return casual.country})
	.attr('Description', function() {return casual.description})
	.attr('createdAt', function() { return new Date(); })
	.attr('updatedAt', function() { return new Date(); })
	.sequence('id', function() {return casual.integer(1500, 5000)});


Factory.define('Hotels')
	.sequence('Name', function() {return casual.title})
	.attr('Rooms', function() {return casual.integer(50, 1000)})
	.attr('Stars', function() {return casual.integer(1, 5)})
	.attr('createdAt', function() { return new Date(); })
	.attr('updatedAt', function() { return new Date(); })
	.sequence('id', function() {return casual.integer(1500, 5000)});

_.times(20, function() {
	var country = Factory.build('Countries');
	countries.push(country);

	_.times(10, function() {
		var hotel = Factory.build('Hotels', {Country: country.Name});
		hotels.push(hotel);
	});
});

fs.readFile(dbPath, function(err, db) {
	var data = JSON.parse(db);
	data.data.country = countries;
	data.data.hotel = hotels;

	fs.writeFile(dbPath, JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;

		console.log('Done!');
	});
});
