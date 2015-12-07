import requireDir from 'require-dir';
import gulp from 'gulp';

requireDir('./gulp', { recurse: true });

gulp.task('default', ['watch', 'serve']);
