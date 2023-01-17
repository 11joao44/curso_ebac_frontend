var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate')

// Compilação do SASS
function compilaSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/styles'));
};

// Compressão de imagens
function comprimiImages() {
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
};

// Compressão de código JavaScript
function compressaoJavaScript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
};

// Tarefa padrão
exports.default = function () {
    gulp.watch('./source/styles/main.scss',  gulp.series(compilaSass))
    gulp.watch('./source/images/*',  gulp.series(comprimiImages))
    gulp.watch('./source/scripts/*.js',  gulp.series(compressaoJavaScript))
}