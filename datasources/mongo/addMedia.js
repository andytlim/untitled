var mongodb = require('./mongoDatasource');

var COLLECTION = 'media';

module.exports = function(media) {
    return mongodb.then(function(db) {
        return db.collection(COLLECTION).insertOne(media).then(function(result) {
            return result; 
        }, function(error) {
            return error;
        });
    });
}