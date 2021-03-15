const fs = require('fs');
const musicMetadata = require('music-metadata');

const processAudioFile = filePath => {

    fs.readFile(filePath, function (err, data) {
        if (err) {
           return console.error(err);
        }

        musicMetadata.parseFile(filePath).then(metadata => {
            console.log(`metadata = ${JSON.stringify(metadata)}`);
        });
        
     });
};


module.exports = {
    processAudioFile
}