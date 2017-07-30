const gulp = require('gulp');
const globby = require('globby');
const path = require('path');
const fs = require('fs');

gulp.task('generate-index', () => {
    let root = 'engine';
    globby([root + '/*', '!index.ts']).then(matches => {
        matches.forEach((element) => {
            if (path.parse(element).ext !== '.ts') {
                let folder = element + '/*';
                handleSubFolder([folder, '!index.ts'], true);
            }
        });
    });

});

function handleSubFolder(paths, isFiles = false) {
    globby(paths).then(matches => {
        if (!matches || matches.length === 0) {
            return;
        }

        let root = path.parse(matches[0]).dir;
        let modules = [];

        matches = matches.filter((element) => {
            if (isFiles) {
                return path.parse(element).ext === '.ts';
            } else {
                return path.parse(element).ext !== '.ts';
            }
        });

        let data = '';
        matches.forEach((module) => {
            module = module.replace(root + '/', '');
            data += `export * from './${module}';\n`
        });

        console.log(matches)

        // modules.
        // fs.writeFile(path.join(root, 'index.ts'), data);
    });
}