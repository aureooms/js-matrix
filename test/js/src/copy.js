
var run, array, alloc;

array = require( "aureooms-js-array" );

alloc = matrix.__alloc__( array.alloc );

run = function ( m, n ) {

	var A, B, r, c;

	A = alloc( m, n );
	B = alloc( m, n );

	for ( r = 0 ; r < m ; ++r ) {

		array.iota( A[r], 0, n, r * m );

	}

	matrix.fill( B, 0, m, 0, n, -1 );
	matrix.copy( A, 1, m-1, 1, n-1, B, 1, 2 );

	for ( r = 1 ; r < m-1 ; ++r ) {

		for ( c = 2 ; c < n ; ++c ) {

			equal( B[r][c], A[r][c-1], r + "," + c + " : check value" );

		}

	}

	for ( c = 0 ; c < n ; ++c ) {
		equal( B[0][c], -1, 0 + "," + c + " : check value" );
		equal( B[m-1][c], -1, m-1 + "," + c + " : check value" );
	}

	for ( r = 1 ; r < m-1 ; ++r ) {

		equal( B[r][0], -1, r + "," + 0 + " : check value" );
		equal( B[r][1], -1, r + "," + 1 + " : check value" );

		for ( c = 2 ; c < n ; ++c ) {

			equal( B[r][c], A[r][c-1], r + "," + c + " : check value" );

		}

	}


};


test( "copy", function () {

	run( 3, 3 );
	run( 3, 2 );
	run( 2, 3 );
	run( 5, 5 );
	run( 3, 4 );
	run( 4, 3 );

} );
