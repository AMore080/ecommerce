const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/index.js',
      install: './src/utils/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    //Add and configure workbox plugins for a service worker and manifest file.

    plugins: [
      //webpack plugin to generate html file and injects the bundle
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'Code Movie!',
      }),
      // new MiniCssExtractPlugin(),
      new InjectManifest({
        swSrc: '../serviceWorker.js',
        swDest: 'serviceWorker.js'
      }),

      //unit 28-creates manifest json
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Code Movie!',
        short_name: 'Code Movie!',
        description: 'Search for your favorite movies!',
        background_color: '#89CFF0',
        theme_color: '#E5CFFB',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('./public/movie512.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

    ],

    module: {
      rules: [
        {
          //Add CSS loaders and babel to webpack.
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // babel setup
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/plugin-syntax-jsx'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },

      ],
    },
  };
};