var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
var plugin = new JasminePlugin();

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

gulp.task('watch-test', function() {
  return gulp.src(['test/**/*_test.js'])
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('watch-test-console', function() {
  return gulp.src(['test/**/*_test.js'])
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({whenReady: plugin.whenReady}));
});
