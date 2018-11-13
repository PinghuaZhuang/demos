const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './public/main.js'),
    output: {
        path: path.resolve(__dirname, './public/out'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }]
    }
};