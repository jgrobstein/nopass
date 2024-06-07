import gulp  from 'gulp';
import zip from 'gulp-zip';

export function copy() {
  return gulp.src(['./static/*'])
    .pipe(gulp.dest('./build/'));
}

export async function pack() {
  return gulp.src('./build/*')
		.pipe(zip('nopass.zip'))
		.pipe(gulp.dest('./'))
}

export default gulp.series(copy,pack);