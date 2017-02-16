
var run, array, alloc;

array = require( "@aureooms/js-array" );

alloc = matrix.__alloc__( array.alloc );

run = function ( m, n ) {

	var A, B, r, c;

	A = alloc( m, n );
	B = alloc( n, m );

	for ( r = 0 ; r < m ; ++r ) {

		array.iota( A[r], 0, n, r * m );

	}

	matrix.fill( B, 0, n, 0, m, -1 );
	matrix.transpose( A, 1, m-1, 1, n-1, B, 2, 1 );

	for ( r = 1 ; r < m-1 ; ++r ) {

		for ( c = 2 ; c < n ; ++c ) {

			equal( B[c][r], A[r][c-1], c + "," + r + " : check value" );

		}

	}

	for ( c = 0 ; c < n ; ++c ) {
		equal( B[c][0], -1, c + "," + 0 + " : check value" );
		equal( B[c][m-1], -1, c + "," + m-1 + " : check value" );
	}

	for ( r = 1 ; r < m-1 ; ++r ) {

		equal( B[0][r], -1, 0 + "," + r + " : check value" );
		equal( B[1][r], -1, 1 + "," + r + " : check value" );

		for ( c = 2 ; c < n ; ++c ) {

			equal( B[c][r], A[r][c-1], c + "," + r + " : check value" );

		}

	}


};


test( "transpose", function () {

	run( 3, 3 );
	run( 3, 2 );
	run( 2, 3 );
	run( 5, 5 );
	run( 3, 4 );
	run( 4, 3 );

} );
