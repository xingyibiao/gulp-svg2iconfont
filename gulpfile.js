const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const clean = require("gulp-clean");
const gulpSequence = require('gulp-sequence')

const fontName = 'icon'

// 构建任务
gulp.task('build', () => {
  return gulp.src('./svg/*.svg')
    .pipe(iconfontCss({
      fontName: fontName,
      path: './templates/iconfont.css',
      targetPath: '../css/iconfont.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      options: {
        fixedWidth: false,
        normalize: false,
        fontHeight: 512,
        descent: -32,
        normalize: true
      }
    }))
    .on('glyphs', function (glyphs, options) {
      // CSS templating, e.g.           
      //console.log(glyphs, options);
    })
    .pipe(gulp.dest('./icon/fonts/'));
})

// 清除构建
gulp.task('clean', () => {
  return gulp.src('./icon', { read: false })
    .pipe(clean())
})

gulp.task('default', gulpSequence('clean', 'build', () => {
  console.log('end!')
}))





