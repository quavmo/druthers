import gulp from 'gulp';
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
  var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel));

  function rebundle() {
    return bundler.bundle()
      .on('error', $.notify.onError(meticulouslyParseError))
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'))
      .pipe($.notify("Bundled!"));
  }

  watch && bundler.on('update', rebundle);
  watch ? rebundle() : rebundle().pipe($.exit());
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return compile(true) });

function meticulouslyParseError(error) {
    console.error(error.toString());
    console.error(error.codeFrame);
    let file         = path.basename(error.filename);
    let position     = [error.loc.line, error.loc.column].join(':');
    let errorParser  =  /(.+?(?=:)):(.+?(?=:)):(.+?(?=\/))/;
    let type         = error.name;

    return `${type}: ${file} (${position})`;
}
