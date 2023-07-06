const gulpIf = require('gulp-if')

const img = () => {
    return $.gulp.src($.path.img.src)
        .pipe($.gp.newer($.path.img.dest))
        .pipe($.gp.webp())
        .pipe($.gulp.dest($.path.img.dest))
        .pipe($.gulp.src($.path.img.src))
        .pipe($.gp.newer($.path.img.dest))
        .pipe(gulpIf($.app.isProd, $.gp.imagemin($.app.imagemin)))
        .pipe($.gulp.dest($.path.img.dest))
}

module.exports = img;