import gulp             from 'gulp';
import fs               from 'fs';
import gulpLoadPlugins  from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('web', function() {
  fs.writeFileSync('./build/CNAME', "druthers.io");

  return gulp.src('src/index.html')
      .pipe(gulp.dest('build'))
      .pipe($.notify("HTML & CNAME!"));
});

gulp.task('watch-web', function () {
  gulp.watch('src/index.html', ['web']);
});
