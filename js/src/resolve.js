


var resolve = function (a, args) {
	var i, len;

	len = args.length;

	for (i = 1; i < len; ++i) {
		a = a[args[i]];
	}

	return a;

};

exports.resolve = resolve;
