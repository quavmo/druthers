import requireDir from 'require-dir';
import gulp from 'gulp';

requireDir('./gulp', { recurse: true });

gulp.task('default', ['watch-image', 'watch-script', 'watch-test', 'serve']);
gulp.task('build', ['image', 'script', 'test']);
