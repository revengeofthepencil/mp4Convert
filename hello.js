const commandLineArgs = require('command-line-args')
const fs = require('fs');
const getAudioDecoder = require('audio-file-decoder');
// import { getAudioDecoder } from 'audio-file-decoder';
// import DecodeAudioWasm from 'audio-file-decoder/decode-audio.wasm'; 

const optionDefinitions = [
    { name: 'dir', alias: 'd', type: String },
  ]
  
  const options = commandLineArgs(optionDefinitions)


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
            if (fileIdx === -1) {
                console.log(`${fileIdx} = ${fileName}`);
                const fullFile = `${dir}/${fileName}`;
                fs.readFile(fullFile, function (err, data) {
                    if (err) {
                       return console.error(err);
                    }
                    console.log("Content: " + data.toString());
                 });
                
            }
        });
    });
    
}
