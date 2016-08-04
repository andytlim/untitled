var youtube = require('./youtubeDatasource');

module.exports = function(id) {
    return new Promise(function(resolve,reject){
        youtube.getById('', function(error, result) {
            if(error !== null) {
                reject(null);
            }else {
                resolve(result);
            }
        });
    });
}