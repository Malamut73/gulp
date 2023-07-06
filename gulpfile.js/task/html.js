const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe($.gulp.dest($.path.html.dest))
        // .pipe($.gulp.src($.path.html.src))
        .pipe($.gp.webpHtml())
        // .pipe($.gp.rename({ suffix: '.min'}))
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gulp.dest($.path.html.dest))
}

module.exports = html;