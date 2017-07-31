const gulp = require('gulp');
const globby = require('globby');
const path = require('path');
const fs = require('fs');
const index = require('create-index');
const shelljs = require('shelljs');

gulp.task('create-index', () => {
    console.log('Creating indexing files ...');

    globby(['engine/**/', '!engine/'], {}).then((matches) => {
        generateExports(matches, 'engine', true);
    });
    return;

    globby(['engine/**/', '!index.ts'], {}).then((matches) => {
        matches.map((dir) => {
            globby([dir + '*.ts'], {}).then((files) => {
                generateExports(files, dir, false);
            });

        })
    });
});

gulp.task('publish', ['create-index'], () => {

    console.log(`Patching new version ...`);
    // shelljs.exec('npm version patch --force');

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

function generateExports(files, saveDir, isDir = false) {
    let exportData = '';

    files.map((file) => {

        let parsedData = path.parse(file);
        let filename = '';
        if (isDir) {
            let dir = parsedData.dir.replace(saveDir + '/', '') || dir;
            dir = dir.replace(saveDir, '') || '';

            filename = path.join(dir, parsedData.name) + parsedData.ext;
        } else {
            filename = parsedData.name;
        }

        console.log(filename)


        if (parsedData.base !== 'index.ts') {
            exportData += `export * from './${filename}';\n`;
        }
    })

    let fullData = `//@ Auto-Generated indexing files for avg.engine\n\n${exportData}`;
    fs.writeFileSync(path.join(saveDir, 'index.ts'), fullData);
}