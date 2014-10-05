

/**
 * Matrix filler
 *
 * @param {Array} a matrix pointer
 * @param {any} v value used to fill the matrix
 * @param {int[]} args list of the size of the different dimensions
 * @param {int} i current index in args
 * @param {int} last last index to consider in args
 *
 */


var fill = function(a, v, args, i, last) {
	var n, a, j;
	n = args[i];

	if (i === last) {
		for (j = 0; j < n; ++j) {
			a[j] = v;
		}
	}
	else {
		++i;
		for (j = 0; j < n; ++j) {
			fill(a, v, args, i, last);
		}
	}

	return a;
};

exports.fill = fill;
