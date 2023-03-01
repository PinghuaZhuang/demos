var arr = [ 1, 2, 3, 4, 1, 4, 1, 2, 3, 4, 11 ];

/**
 * 数组去重
 * @description 创建一个新的数组与旧数组遍历对比, 只在新数组中不存在该元素则添加
 * @param { Array } arr 数组
 */
function uniq ( arr ) {
    var t = [],                 // 新数组
        i, j,
        len = arr.length,       // 目标数组长度
        flag;                   // 标记用

    for ( i = 0; i < len; i++ ) {
        flag = false;
        for ( j = 0; j < t.length; j++ ) {
            if ( t[ j ] === arr[ i ] ) {
                flag = true;
                break;
            }
        }

        if ( !flag ) {
            t.push( arr[ i ] );
        }
    }

    return t;
}


console.log( 'result:', uniq( arr ) );  // => result: [ 1, 2, 3, 4, 11 ]
