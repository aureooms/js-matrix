

/**
 * Matrix filler
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
