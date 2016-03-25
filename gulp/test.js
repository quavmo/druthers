var gulp = require('gulp');
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');

let plugin = new JasminePlugin();
let testFiles = 'test/**/*_test.js';
let sourceFiles = 'src/**/*.js';
let webpackConfig = {
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
    .pipe(webpack(Object.assign({watch: true}, webpackConfig)))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('test-console', function () {
  return gulp.src(testFiles)
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({whenReady: plugin.whenReady}))
    .on('error', $.notify.onError(e => `★★★ ${e} ★★★`));
});

gulp.task('test-console-watch', function() {
  gulp.watch([testFiles, sourceFiles], ['test-console']);
});
