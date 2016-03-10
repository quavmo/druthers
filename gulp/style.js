import gulp             from 'gulp';
import fs               from 'fs';
import gulpLoadPlugins  from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('style', function() {
  return gulp.src('src/style.css')
      .pipe(gulp.dest('build'))
      .pipe($.notify("Styles!"));
});

gulp.task('watch-style', function () {
  gulp.watch('src/**/*.css', ['style']);
});
