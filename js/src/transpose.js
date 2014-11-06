

/**
* Matrix transposition
*
*           m = Amj - Ami, n = Anj - Ani
*           Bmj = Bmi + n, Bnj = Bni + m
*
*           A                          B
*
*    Ani          Anj            Bni        Bnj
*  Ami 1 2 . . . . ..          Bmi 1 3 . . . ..
*   .. 3 . . . . . ..           .. 2 . . . . ..
*   .. . . . . . . ..    ->     .. . . . . . ..
*   .. . . . . . . ..           .. . . . . . ..
*   .. . . . . . . ..           .. . . . . . ..
*  Amj                          .. . . . . . ..
*                              Bmj
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


var transpose = function ( A, Ami, Amj, Ani, Anj, B, Bmi, Bni ) {

	var m, n, r, c, Ar, Br;

	m = Amj - Ami;
	n = Anj - Ani;

	for ( r = 0 ; r < m ; ++r ) {

		Ar = A[Ami + r];

		for ( c = 0 ; c < n ; ++c ) {
			B[Bmi + c][Bni + r] = Ar[Ani + c];
		}

	}

};

exports.transpose = transpose;
