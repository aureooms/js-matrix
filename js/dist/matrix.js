(function(exports, undefined){

	'use strict';


/* js/src/alloc.js */


/**
 * Matrix builder
 *
 * @param {allocator} rowalloc the row allocator function
 */

var __alloc__ = function ( rowalloc ) {


	/**
	 * @param  {const length} m the number of rows
	 * @param  {const length} n the number of columns
	 * @return {matrix}   the allocated matrix
	 */
	var alloc = function ( m, n ) {

		var A, r;

		A = new Array( m );

		for ( r = 0 ; r < m ; ++r ) {
			A[r] = rowalloc( n );
		}

		return A;
		
	};

	return alloc;
};

exports.__alloc__ = __alloc__;

/* js/src/copy.js */


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

/* js/src/fill.js */


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

/* js/src/transpose.js */


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

})(typeof exports === 'undefined' ? this['matrix'] = {} : exports);
