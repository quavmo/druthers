import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

let imgSrc = 'src/image/**/*';
let imgDest = 'build/image';

gulp.task('image', function() {
  return gulp.src(imgSrc)
      .pipe($.newer(imgDest))
      .pipe($.image())
      .pipe(gulp.dest(imgDest))
      .pipe($.notify("Images!"));
});

gulp.task('watch-image', function () {
  gulp.watch(imgSrc, ['image']);
});
