import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('serve', function() {
  $.connect.server({
    root: 'build',
    livereload: true
  });
});
