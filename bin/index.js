#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const { processAudioFile } = require('../audioFileUtils');

const options = yargs
 .usage("Usage: -d <name>")
 .option("d", { alias: "dir", describe: "Directory to process", type: "string", demandOption: true })
 .argv;


console.log(`get it! options = ${JSON.stringify(options)}`);
  
if (options.dir) {
    const { dir } = options;

    console.log(`dir = '${dir}'`);
    fs.readdir(dir, (err, files) => {
        if (err) {
            throw err;
        }
    
        // files object contains all files names
        // log them on console
        files.forEach( (fileName, fileIdx ) => {
            if (fileIdx === 0) {
                console.log(`${fileIdx} = ${fileName}`);
                const fullPath = `${dir}/${fileName}`;
                processAudioFile(fullPath);
                /*
                fs.readFile(fullFile, function (err, data) {
                    if (err) {
                       return console.error(err);
                    }
                    console.log("Content: " + data.toString());
                 });*/
                
            }
        });
    });
    
}
