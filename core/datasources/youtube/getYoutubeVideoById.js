var youtube = require('./youtubeDatasource');

module.exports = function(id) {
    return new Promise(function(resolve,reject){
        youtube.getById(id, function(error, result) {
            if(error !== null) {
                reject(error); 
            }else if(!(result.items instanceof Array)) {
                reject('Unexpected result');
            }else if(result.items.length <= 0) {
                reject('No Youtube video found with id: ' + id);
            }else {
                resolve(result.items[0]);
            }
        });
    });
}