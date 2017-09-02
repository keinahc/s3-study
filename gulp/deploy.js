let gulp = require('gulp');
let awspublish = require('gulp-awspublish');
import opt from './options';


gulp.task('deploy', ['build']);

gulp.task('deploy', () => {
  let publisher = awspublish.create({
    "params": {
      "Bucket": "s3website-study"
    },
    "endpoint": "s3-ap-northeast-1.amazonaws.com"
  });

  gulp.src(`${opt.destDir.root}/**/*`)
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
