import gulp from 'gulp';
import Util from './util';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import sourcemaps from 'gulp-sourcemaps';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import watchify   from 'watchify';
import babel      from 'babelify';
import path       from 'path';

function compile(watch) {
  var bundler = watchify(browserify('./src/index.js', {debug: true }).transform(babel));

  function rebundle() {
    return bundler.bundle()
      .on('error', $.notify.onError(Util.meticulouslyParseError))
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'))
      .pipe($.notify("ECMA!"));
  }

  watch && bundler.on('update', rebundle);
  return watch ? rebundle() : rebundle().pipe($.exit());
}

gulp.task('script', function() { return compile(); });
gulp.task('watch-script', function() { return compile(true) });
