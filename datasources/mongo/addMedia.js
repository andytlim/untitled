var mongodb = require('./mongoDatasource');

var COLLECTION = 'media';

module.exports = function(media) {
    return new Promise(function(resolve,reject){
        if(media.items.length > 0) {
            resolve(media);
        }else{
            reject('nothing found');
        }
    });
    /*return mongodb.then(function(db) {
        return db.collection(COLLECTION).insertOne(media).then(function(result) {
            return result; 
        });
    });*/
}