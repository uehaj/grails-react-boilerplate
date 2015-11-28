var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  devServer: {
      contentBase: path.join(__dirname, 'src'),
      info: true, //  --no-info option
      hot: true,
      inline: true,
      port: 3000
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //     new ExtractTextPlugin('style.css', {allChunks: true}),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    function () {
        this.plugin("done", function (stats) {
            stats = stats.toJson();
            console.error(JSON.stringify({
                assetsByChunkName: stats.assetsByChunkName
            }));
        });
    }
  ],
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
