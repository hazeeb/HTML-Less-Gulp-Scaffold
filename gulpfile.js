/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

//must install gulp-less npm to make this 
var less= require('gulp-less');

//npm browser-sync 
var bs = require('browser-sync').create(); // create a browser sync instance.


//Less Task
gulp.task('less', function(){
	//less folder
	gulp.src(['less/*.less'])
	.pipe(less())
	.pipe(gulp.dest('css')) ;
	console.log("Running Less Task");
});

//Browser Sync Task
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});



//when ever a change happens, run the task less
gulp.task('watch',['browser-sync'], function() {
    gulp.watch('less/*.less', ['less']).on('change', bs.reload);
    gulp.watch(['*.html', 'less/*.less', 'css/*.css']).on('change', bs.reload);
});


// create a default task and just log a message
gulp.task('default',['watch','less']);