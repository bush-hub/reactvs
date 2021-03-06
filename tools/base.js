const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom'],
    'index': path.resolve(__dirname, '..', 'src', 'index.tsx')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      'components': path.resolve(__dirname, '..', 'src', 'components'),
      'containers': path.resolve(__dirname, '..', 'src', 'containers'),
      'assets': path.resolve(__dirname, '..', 'src', 'assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: [
          {
            loader: "source-map-loader"
          }
        ]
      }
    ],
  },
  // plugins
  plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};