

/**
 * Matrix copy
 *
 *           m = Amj - Ami, n = Anj - Ani
 *           Bmj = Bmi + m, Bnj = Bni + n
 *
 *           A                           B
 *
 *    Ani          Anj            Bni          Bnj
 *  Ami . . . . . . ..          Bmi . . . . . . ..
 *   .. . . . . . . ..           .. . . . . . . ..
 *   .. . . . . . . ..    ->     .. . . . . . . ..
 *   .. . . . . . . ..           .. . . . . . . ..
 *   .. . . . . . . ..           .. . . . . . . ..
 *  Amj                         Bmj
 *
 *
 *
 * @param {matrix} A matrix pointer
 * @param {const index} Ami
 * @param {const index} Amj
 * @param {const index} Ani
 * @param {const index} Anj
 * @param {matrix} B matrix pointer
 * @param {const index} Bmi
 * @param {const index} Bni
 *
 */

var copy = function ( A, Ami, Amj, Ani, Anj, B, Bmi, Bni ) {

	var m, n, r, c, Ar, Br;

	m = Amj - Ami;
	n = Anj - Ani;

	for ( r = 0 ; r < m ; ++r ) {

		Ar = A[Ami + r];
		Br = B[Bmi + r];

		for ( c = 0 ; c < n ; ++c ) {
			Br[Bni + c] = Ar[Ani + c];
		}

	}

};

exports.copy = copy;
