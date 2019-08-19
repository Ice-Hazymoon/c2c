const opencc = require('node-opencc');
const path = require('path');
const fs = require('fs');
const { isBinaryFileSync } = require("isbinaryfile");
const { type } = require('./config');
const ig = require('ignore').default().add(fs.readFileSync('./.c2cignore', 'utf-8').toString());

const outputFolderPath = path.join(__dirname, './output');
if (!fs.existsSync(outputFolderPath)) fs.mkdirSync(outputFolderPath);

const s2t = e => opencc[type](e);
const getRelativePath = path => {
    return path.replace(__dirname, '').replace('\\input\\', '');
}

function doReadDir(dir = path.join(__dirname, './input')) {
    const files = fs.readdirSync(dir).reverse();
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const modulePath = path.join(dir, file);
        const isDir = fs.lstatSync(modulePath).isDirectory();
        if (isDir) {
            doReadDir(modulePath);
        } else {
            try {
                const outputPath = path.join(__dirname, './output', getRelativePath(modulePath));
                const outputFolder = path.join(__dirname, './output', getRelativePath(dir));
                if (ig.ignores(getRelativePath(modulePath))) continue;
                if (!fs.existsSync(outputFolder)) {
                    fs.mkdirSync(outputFolder, {
                        recursive: true
                    });
                }
                if (isBinaryFileSync(modulePath)) {
                    fs.copyFileSync(modulePath, outputPath);
                } else {
                    console.log(`正在转换：${outputPath}`);
                    const translateData = fs.readFileSync(modulePath, 'utf8');
                    fs.writeFileSync(outputPath, s2t(translateData));
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}

doReadDir();
