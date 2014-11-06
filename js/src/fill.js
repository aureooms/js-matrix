

/**
 * Matrix filler
 *
 *    ni           nj
 *  mi v v v v v v ..
 *  .. v v v v v v ..
 *  .. v v v v v v ..
 *  .. v v v v v v ..
 *  .. v v v v v v ..
 *  mj
 *
 * @param {matrix} A matrix pointer
 * @param {any} v value used to fill the matrix
 * @param {const index} mi
 * @param {const index} mj
 * @param {const index} ni
 * @param {const index} nj
 *
 */


var fill = function ( A, mi, mj, ni, nj, v ) {

	var r, c, Ar;

	for ( r = mi ; r < mj ; ++r ) {

		Ar = A[r];

		for ( c = ni ; c < nj ; ++c ) {
			Ar[c] = v;
		}

	}

};

exports.fill = fill;
