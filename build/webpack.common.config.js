const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WebpackBar = require('webpackbar');
const babelConfig = require('./babel.config')(false);
const replaceLib = require('./replace.lib')
const postcssConfig = require('./postcss.config')
babelConfig.plugins.push(replaceLib)

const svgRegex = /\.svg(\?v=\d+\.\d+\.\d+)?$/;
const svgOptions = {
  limit: 10000,
  minetype: 'image/svg+xml',
};

const imageOptions = {
  limit: 10000,
};

module.exports = {
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.js', '.jsx', '.vue', '.md', '.json'],
    alias: {
      '@': process.cwd(),
    },
  },
  module: {
    rules: [{
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              js: [{
                loader: 'babel-loader',
                options: {
                  presets: [require.resolve('@babel/preset-env')],
                  plugins: [
                    require.resolve('@vue/babel-plugin-jsx'),
                    require.resolve('@babel/plugin-proposal-object-rest-spread'),
                  ],
                },
              }, ],
            },
          },
        }, ],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          },
        }, {
          loader: 'babel-loader',
          options: babelConfig
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: Object.assign({}, postcssConfig, {
              sourceMap: true
            }),
          },
        ],
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      // Images
      {
        test: svgRegex,
        loader: 'url-loader',
        options: svgOptions,
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url-loader',
        options: imageOptions,
      },
    ]
  },
  node: [
    'child_process',
    'cluster',
    'dgram',
    'dns',
    'fs',
    'module',
    'net',
    'readline',
    'repl',
    'tls',
  ].reduce((acc, name) => Object.assign({}, acc, {
    [name]: 'empty'
  }), {}),
  plugins: [
    new CaseSensitivePathsPlugin(),
    new WebpackBar({
      name: '🚚  Lin UI Vue Tools',
      color: '#3663BE',
    }),
  ],
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
}