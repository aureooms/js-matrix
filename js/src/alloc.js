

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
