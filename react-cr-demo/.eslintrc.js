
module.exports = {
    root: true,
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
        // allowImportExportEverywhere: true
    },
    env: {
        browser: true,
    },

    extends: [
        'jquery'
    ],

    // required to lint *.vue files
    plugins: [
        'typescript'
    ],

    globals: {
        define: true,
        module: true,
        Promise: true,
        require: true,
        WeakMap: true,
        WeakSet: true,
    },

    // add your custom rules here
    rules: {

        // allow async-await
        'generator-star-spacing': 'off',

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // 缩进
        'indent': [ 'error', 4 ],

        // no-unused-vars
        'no-unused-vars': [ 'warn' ],

        // 使用单引号
        'quotes': [ 'error', 'single' ],

        // window 下的换行 CRLF
        // 'linebreak-style': [ 'error', 'windows' ],
        // 多个空格
        // a  =    19;
        // 行尾注释多个空格
        // 'no-multi-spaces': [ 'error', {
        //     exceptions: {
        //         'VariableDeclarator': true
        //     },
        //     ignoreEOLComments: true
        // } ],

        // 函数前空格
        'space-before-function-paren': [ 'error', {
            'anonymous': 'always',      // 匿名函数
            'named': 'always'           // 申明函数
        } ],

        // 与 null 对比较
        'eqeqeq': [ 'error', 'always', { 'null': 'ignore' } ]
    }
}
