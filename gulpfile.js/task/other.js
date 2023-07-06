const other = () => {
    return $.gulp.src($.path.other.src)
        .pipe($.gulp.dest($.path.other.dest))
}

module.exports = other;