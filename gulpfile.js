const gulp = require('gulp');
const globby = require('globby');
const path = require('path');
const fs = require('fs');
const index = require('create-index');
const shelljs = require('shelljs');

gulp.task('create-index', () => {
    index.writeIndex(['./dist']);
});


gulp.task('publish', ['create-index'], () => {
    
});