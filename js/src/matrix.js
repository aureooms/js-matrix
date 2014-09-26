

/**
 * Matrix builder
 *
 * @param {function} alloc the allocator function
 */

var __matrix__ = function (alloc) {

	var wrap = function () {

		if (arguments.length === 0) {
			return null;
		}

		return matrix(arguments, 0, arguments.length - 1);

	};

	var matrix = function(args, i, last) {
		var n, a, j;
		n = args[i];

		if (i === last) {
			return alloc(n);
		}
		else {
			a = new Array(n);
			++i;

			for (j = 0; j < n; ++j) {
				a[j] = matrix(args, i, last);
			}
		}

		return a;
	};

	return wrap;
};

exports.__matrix__ = __matrix__;
