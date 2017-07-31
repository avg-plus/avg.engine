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
    console.log(`Patching new version ...`);
    shelljs.exec('npm version patch --force');

    console.log(`Writing publish package.json ...`);
    const package = fs.readFileSync('./package.json');
    const packageConfig = JSON.parse(package);

    const distPackageConfig = {};

    distPackageConfig.name = packageConfig.name;
    distPackageConfig.version = packageConfig.version;
    distPackageConfig.author = packageConfig.author;
    distPackageConfig.license = packageConfig.license;
    distPackageConfig.repository = packageConfig.repository;
    distPackageConfig.dependencies = packageConfig.dependencies;
    distPackageConfig.main = './engine/index.js';

    fs.writeFileSync('dist/package.json', JSON.stringify(distPackageConfig, null, 2));

    shelljs.exec('yarn publish');
});