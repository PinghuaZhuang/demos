
const _resolve = Symbol( 'resolve' )

export default class PlainAysncAbs {

    constructor () {
        this._next = new Promise( ( resolve, reject ) => this.init[ _resolve ] = resolve )
    }

    init ( fn ) {
        fn( this.init[ _resolve ] )
    }
}
