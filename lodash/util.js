/**
 * @file 使用函数
*/

var _ = require( 'lodash' )
console.log( typeof _ === 'function' )

// 返回唯一 ID
var id1 = _.uniqueId()
