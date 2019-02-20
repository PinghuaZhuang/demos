/**
 * @file 使用函数
*/

var _ = this._;

if ( _ == null ) {
    _ = require( 'lodash' )
}

/* uniqueId */
var ID_TAG = 'ID_'
var id1 = _.uniqueId( ID_TAG )
var id2 = _.uniqueId( ID_TAG )

var _bak = _.runInContext()
var id3 = _bak.uniqueId( ID_TAG )
console.log( 'ID:', id1, id2, id3 )
// ==> ID: ID_1 ID_2 ID_1

/* runInContext */
// TODO:
// 创建新的给定上下文的 lodash
var lodash = _.runInContext( {
    getTime: function () {
        return {
            getTTT: function () {
                return 11
            }
        }
    },
    color: 'red'
} )
lodash.mixin( {
    znv: function () {
        // console.dir( this )
        return this.getTime
    }
} )
// console.dir( lodash )
// console.log( lodash.getTime, lodash.getTTT, lodash )
// console.log( 'runInContext:', lodash.znv() )

/* range */
// 从 -10 开始, 不包含 0 的数据
console.log( _.range( -10, 0, 2 ) )

/* property */
// 'a.b' === [ 'a', 'b' ]
var data1 = [
    { a: { b: 2 } },
    { a: { b: 1 } }
]

var ret1 = _.map( data1, _.property( 'a.b' ) )
var ret2 = _.map( _.sortBy( data1, _.property( 'a.b' ) ), 'a.b' )
console.log( 'property:', ret1, ret2 )
// ==> [ 2, 1 ] [ 1, 2 ]

/* overSome, overEvery, over */
var is1 = function ( param ) {
    return param === 'a'
}
var is2 = function ( param ) {
    return param === void(0)
}

var ret3 = _.overSome( [ is1, is2 ] )
var ret4 = _.overEvery( [ is1, is2 ] )
// 会被强制转换
console.log( 'overSome:', ret3( 'a' ), ret4( 'a' ) )
// ==> true false

/* matches */
var data2 = [
    { a: '1', b: '2' },
    { a: '3', b: '2' },
    { a: '4', b: '1' },
]
var ret5 = _.filter( data2, _.matches( { a: '1', b: '2' } ) )
console.log( 'matches:', ret5 )
