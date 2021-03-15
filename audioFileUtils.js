// import { getAudioDecoder } from 'audio-file-decoder';
// import DecodeAudioWasm from 'audio-file-decoder/decode-audio.wasm'; 
const fs = require('fs');
// const getAudioDecoder = require('audio-file-decoder')

const processAudioFile = filePath => {
    fs.readFile(filePath, function (err, data) {
        if (err) {
           return console.error(err);
        }
        console.log("Content: " + data.toString());
     });
};


module.exports = {
    processAudioFile
}