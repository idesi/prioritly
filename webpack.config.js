var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry:['./app/index'],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js',
        pubicPath: '/dist/'
    },
    module: {
        loaders:[
            {test: /\.js$/, exlude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
