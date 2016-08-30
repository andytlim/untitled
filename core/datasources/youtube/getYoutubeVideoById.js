var Youtube = require('./youtubeDatasource');

module.exports = function(id) {
    return new Promise(function(resolve, reject) {
        Youtube.videos.list({
          id: id,
          part: 'snippet'
        }, function (err, result) {
            if (err !== null) {
                reject(err); 
            } else if (!(result.items instanceof Array)) {
                reject('Unexpected result');
            } else if (result.items.length <= 0) {
                reject('No Youtube video found with id: ' + id);
            } else {
                resolve(result.items[0]);
            }
        });
    });
}