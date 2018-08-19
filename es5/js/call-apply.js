let zp = {
    _init: function ( setName, name ) {
        this.name = 'xxx';

        // setName && setName.apply( this, [ name ] );

        window.setTimeout( function () {
            this.name = 'xxxxxxx';
        }.call( this ), 1000 );
    }
};

function test ( name ) {
    this.name = name;
}

console.log( 'zp:', zp._init( test, 'opop' ), zp );
