

/**
 * Matrix transposer
 */


var transpose = function(a, b, args, map, index, i, last) {
	var n, a, j, k;
	n = args[i];
	k = map[i];

	if (i === last) {
		for (j = 0; j < n; ++j) {
			index[k] = j;
			a[j] = resolve(b, index);
		}
	}
	else {
		++i;
		for (j = 0; j < n; ++j) {
			index[k] = j;
			transpose(a, b, args, map, index, i, last);
		}
	}
};

exports.transpose = transpose;
