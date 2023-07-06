const filePath = './node_modules/gulp-fonter/dist/index.js';
const searchStr = "newFont.path = source.dirname + '\\\\' + source.stem + '.' + type;";
const replaceStr = "newFont.path = source.dirname + '/' + source.stem + '.' + type;";

const fonterPath = () => {
    return $.gulp.src(filePath)
    .pipe($.gp.replace(searchStr, replaceStr))
    .pipe($.gulp.dest('./node_modules/gulp-fonter/dist/'));
}

module.exports = fonterPath;

