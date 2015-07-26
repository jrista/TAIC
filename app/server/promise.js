(function() {
	var MPromise = require('mpromise');

	function Promise(col, type, opts) {
		this.col = col;
		this.type = type;
		this.opts = opts || {};

		MPromise.call(this);

		this.success = this.onFulfill;
		this.error = this.onReject;
		this.complete = this.onResolve;
		this.onResolve(this.emit.bind(this, 'complete'));

		this.resolve = MPromise.prototype.resolve.bind(this);
		this.fulfill = MPromise.prototype.fulfill.bind(this);
		this.reject = MPromise.prototype.reject.bind(this);
	}

	Promise.SUCCESS = 'success';
	Promise.FAILURE = 'error';

	Promise.prototype.__proto__ = MPromise.prototype;

	module.exports = Promise;
})();
