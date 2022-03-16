const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = {
    entry: './src/soma-vaccines-local.tsx',
    output: {
      filename: 'soma-vaccines.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'system',
      uniqueName: 'vaccines',
      publicPath: ''
    },
    mode: 'development',
    devServer: {
      port: 8083,
      "headers": { "Access-Control-Allow-Origin": "*" },
    },
    externals: [
      "@soma/utility"
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [
        new TSConfigPathsPlugin({
            configFile: path.resolve(__dirname, './tsconfig.json'),
        }),
      ],
    },
    module: {
      rules: [
          { 
              test: /\.(ts|js)x?$/, 
              exclude: /node_modules/,
              use: ['babel-loader']
          },
          { test: /\.css$/i, use: ['style-loader','css-loader'] },
          { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']}
      ]
    },
    plugins: [
      new SystemJSPublicPathPlugin({
        systemjsModuleName: '@soma/vaccines',
        rootDirectoryLevel: 1,
      }),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html'),
          filename: 'index.html',
          title: 'Integrations with React',
          inject: false
      })
  ]
}

