const gulp        = require( 'gulp' );
const browserSync = require( 'browser-sync' ).create();
const watch       = require( 'gulp-watch' );

/**
 * Watch files and reload browser
 */
// Reload the browser when PHP files are edited
gulp.task( 'reload', function () {
    browserSync.reload();
} );

// Watch for changes in PHP files and reload the browser
gulp.task( 'watch', function () {
    browserSync.init( {
        proxy  : 'http://trustpal.local/', // Change to your project URL
        notify : false
    } );

    watch( '**/*.php', gulp.series( 'reload' ) ); // Watch for changes in PHP files
    watch( '**/*.js', gulp.series( 'reload' ) ); // Watch for changes in PHP files
} );