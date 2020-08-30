const gulp = require('gulp')
const path = require('path')
const through2 = require('through2');
const gulpts = require('gulp-typescript')
const babel = require('gulp-babel');
const getBabelCommonConfig = require('./babel.config');
const replaceLib = require('./replace.lib')
const tsProject = gulpts.createProject(path.join(__dirname, '../tsconfig.json'))

const cwd = process.cwd();
const esDir = path.join(cwd, 'es');
const libDir = path.join(cwd, 'lib');

gulp.task('tsc', () => {
    // 
})


gulp.task('default', async () => {
    const include = tsProject.config.include
    const outDir = path.join(__dirname, `../es`)
    // gulp.src(include).pipe(tsProject()).pipe(gulp.dest(outDir))
    const source = ['src/components/**/*.ts', 'src/components/**/*.tsx'];
    return tsProject.src(source).pipe(tsProject()).js.pipe(babel(getBabelCommonConfig())).pipe(gulp.dest(outDir))

})