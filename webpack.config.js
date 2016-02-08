var path = require('path');

module.exports = {
    entry: [
      //'webpack-dev-server/client?http://localhost:8080',
      //'webpack/hot/dev-server',
      path.resolve(__dirname, 'app.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        }
      ]
    }
};
