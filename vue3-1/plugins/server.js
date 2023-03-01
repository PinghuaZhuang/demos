//插件内部可以接受到该插件的配置参数
function HelloWorldPlugin(options) {
}
HelloWorldPlugin.prototype.apply = function(compiler) {
  //此处利用了 Compiler 提供的 done 钩子函数，作用前面已经说过
  // 可以在这里修改配置.
  console.log( '\nxxxxx', compiler.options.devServer )
//   for ( let k in compiler ) {
//       console.log( 'xxxxxxxx', k, compiler[ k ] )
//   }
//   compiler.plugin('done', function() {
//     console.log('Hello World!');
//   });
compiler.options.devServer.before = function ( app ) {
        app.get('/local/get2',
            function (req, res) {
                res.send({
                    color: 'blue2'
                })
            })
    }
};
module.exports = HelloWorldPlugin;
