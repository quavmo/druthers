var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');

let plugin = new JasminePlugin();
let testFiles = ['test/**/*_test.js'];
let webpackConfig = {
  watch: true,
  output: {filename: 'test.js'},
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [plugin]
};

gulp.task('test-browser', function() {
  return gulp.src(testFiles)
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});
