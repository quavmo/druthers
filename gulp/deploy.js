import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe($.ghPages());
});
