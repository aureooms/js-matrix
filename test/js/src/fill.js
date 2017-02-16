
var run, array, alloc;

array = require( "@aureooms/js-array" );

alloc = matrix.__alloc__( array.alloc );

run = function ( m, n, v ) {

	var A, r, c;

	A = alloc( m, n );

	matrix.fill( A, 0, m, 0, n, v );

	for ( r = 0 ; r < m ; ++r ) {

		for ( c = 0 ; c < n ; ++c ) {

			equal( A[r][c], v, r + "," + c + " : check value" );

		}


	}


};


test( "fill", function () {

	run( 0, 0, 1 );
	run( 1, 1, 2 );
	run( 1, 2, 3 );
	run( 2, 1, 4 );
	run( 3, 3, 5 );
	run( 3, 2, 6 );
	run( 2, 3, 7 );

} );
