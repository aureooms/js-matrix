
var run, array, alloc;

array = require( "@aureooms/js-array" );

alloc = matrix.__alloc__( array.alloc );

run = function ( m, n ) {

	var A, r;

	A = alloc( m, n );

	equal( A.length, m, "check number of rows" );

	for ( r = 0 ; r < m ; ++r ) {

		equal( A[r].length, n, "check number of columns" );

	}


};


test( "alloc", function () {

	run( 0, 0 );
	run( 1, 1 );
	run( 1, 2 );
	run( 2, 1 );
	run( 3, 3 );
	run( 3, 2 );
	run( 2, 3 );

} );
