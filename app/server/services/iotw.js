(function() {
	var uuid = require('node-uuid');

	function IOTWService(db) {
		var self = Object.create(IOTWService);
		self.col = db.col('iotw');
		return self;
	}

	IOTWService.getAll = function() {
		var self = this;
		var promise = self.col
			.find();

		return promise;
	};

	IOTWService.getLatest = function() {
		var self = this;
		var promise = self.col
			.findOne({}, { sort: { dateWon: -1 } });

		return promise;
	};

	IOTWService.getById = function(id) {
		var self = this;
		var promise = self.col
			.findOne({ _id: id });

		return promise;
	};

	IOTWService.getByTitle = function(title) {
		var self = this;
		var query = {};
		if (title) {
			query['title'] = { $regex: '^' + title, options: 'i' };
		}

		var promise = self.col
			.find(query);

		return promise;
	};

	IOTWService.getByOwner = function(first, last) {
		var self = this;
		var query = {};
		if (first) {
			query['winner.first'] = { $regex: '^' + first, options: 'i' };
		}

		if (last) {
			query['winner.last'] = { $regex: '^' + last, options: 'i' };
		}

		var promise = self.col
			.find(query);

		return promise;
	};

	IOTWService.getByDate = function(date) {
		var self = this;
		var query = {};
		if (date) {
			query['dateWon'] = { $regex: '^' + date, options: 'i' };
		}

		var promise = self.col
			.find(query);

		return promise;
	};

	IOTWService.create = function(winner) {
		var self = this;
		var promise = self.col
			.insert(winner);

		return promise;
	};

	module.exports = IOTWService;
})();