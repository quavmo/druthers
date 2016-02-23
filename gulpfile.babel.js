import requireDir from 'require-dir';
import gulp from 'gulp';

requireDir('./gulp', { recurse: true });

gulp.task('default', ['watch', 'serve']);

gulp.task('watch', ['watch-image', 'watch-web', 'watch-script', 'test-browser']);
gulp.task('build', ['image', 'web', 'script']);
