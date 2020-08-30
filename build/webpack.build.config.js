const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConfig = require('./webpack.common.config')
const modules = {}
const cPath = path.join(__dirname, '../src/components')
const files = fs.readdirSync(cPath)

if (files) {
  files.forEach(name => {
    const p = path.join(cPath, name)
    const ignoreDir = ['_util', 'styles']
    if (fs.statSync(p).isDirectory() && !ignoreDir.includes(name)) {
      modules[name] = `${p}/src/index.tsx`
    }
  })
}

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  entry: modules,
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/index.min.css', // 打包后从js文件中提取出来的css文件名称
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/index.min.js',
    library: ['[name]'],
    libraryTarget: 'umd',
  }
})