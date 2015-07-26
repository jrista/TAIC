(function () {
	var uuid = require('node-uuid');

	function PagesService(db) {
		var self = Object.create(PagesService);
		self.col = db.col('pages');

		self.col.index('name');
		self.col.index('path');
		return self;
	}

	PagesService.getAll = function () {
		var self = this;
		var promise = self.col
			.find();

		return promise;
	};

	PagesService.getByName = function(name) {
		var self = this;
		var promise = self.col
			.find({name: name}, {sort: {name: -1}});

		return promise;
	};

	PagesService.getByPath = function(path) {
		var self = this;
		var promise = self.col
			.find({ path: path }, {sort: { path: -1 } });

		return promise;
	};

	PagesService.create = function(page) {
		var self = this;
		var promise = self.col
			.insert(page);

		return promise;
	};

	PagesService.update = function(page) {
		var self = this;
		var promise = self.col
			.updateById(page._id, page);

		return promise;
	};

	PagesService.deleteByName = function(name) {
		var self = this;
		var promise = self.col
			.remove({ name: name });

		return promise;
	};

	PagesService.deleteByPath = function(path) {
		var self = this;
		var promise = self.col
			.remove({ path: path });

		return promise;
	};

	module.exports = PagesService;
})();