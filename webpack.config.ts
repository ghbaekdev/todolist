const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, './bulid'),
    filename: '[name].js',
  },
  plugin: [
    new CopyWebpackPlugin([
      {
        context: './public',
        from: '*_*',
      },
    ]),
  ],
};
