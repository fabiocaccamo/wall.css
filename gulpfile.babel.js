'use strict';

import browser  from 'browser-sync';
import gulp     from 'gulp';
import panini   from 'panini';
import plugins  from 'gulp-load-plugins';
import rimraf   from 'rimraf';
import yargs    from 'yargs';

const $ = plugins();
const sass = require('gulp-sass')(require('sass'));
const ARGS = yargs.argv;
const PRODUCTION = !!(ARGS.production);
const PATH_DIST = 'dist'

gulp.task('watch', gulp.series(clean, gulp.parallel(pages, scss), server, watch));
gulp.task('build', gulp.series(clean, gulp.parallel(pages, scss)));
gulp.task('default', gulp.series('watch'));

function clean(done) {
    rimraf(PATH_DIST, {}).then(function() {
        done();
    });
}

function pages() {
    return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            // data: 'src/data/',
            // helpers: 'src/helpers/'
        }))
        .pipe(gulp.dest(PATH_DIST));
}

function resetPages(done) {
    panini.refresh();
    done();
}

function scss() {
    return gulp.src('src/scss/*.scss')
        .pipe($.if(!PRODUCTION, $.sourcemaps.init()))
        .pipe(sass({}).on('error', sass.logError))
        .pipe($.autoprefixer())
        .pipe($.if(PRODUCTION, $.cleanCss({ compatibility: 'ie9' })))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
        .pipe(gulp.dest(PATH_DIST + '/css'))
        .pipe(browser.reload({ stream: true }))
}

function server(done) {
    browser.init({
        server: PATH_DIST,
        port: 8000
    });
    done();
}

function reload(done) {
    browser.reload();
    done();
}

function watch() {
    gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, browser.reload));
    gulp.watch('src/{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages, browser.reload));
    gulp.watch('src/scss/**/*.scss').on('all', gulp.series(sass, browser.reload));
}
