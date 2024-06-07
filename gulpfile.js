const { src, dest } = require('gulp');

exports.default = function() {
    return src(['./static/*'])
      .pipe(dest('./build/'));
}