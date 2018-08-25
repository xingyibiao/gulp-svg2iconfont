var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var clean = require("gulp-clean");

const fontName = 'icon'

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

gulp.task('clean', () => {
  return gulp.src('./icon', { read: false })
    .pipe(clean())
})

gulp.task('default', ['clean', 'build'], () => {
  console.log('end!')
})





