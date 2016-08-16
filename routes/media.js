var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/youtube/:videoId', function(req, res, next) {
    var videoId = req.params.videoId;
    
    var Youtube = require("youtube-api");

    Youtube.authenticate({
        type: 'key'
      , key: 'AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w'
    });

    Youtube.search.list({
        q: 'hello',
        part: 'snippet'
    }, function (err, data) {
        var mongodb = require('mongodb');

        //We need to work with "MongoClient" interface in order to connect to a mongodb server.
        var MongoClient = mongodb.MongoClient;

        // Connection URL. This is where your mongodb server is running.
        var url = 'mongodb://goku:gitgud2016@ds023902.mlab.com:23902/untitled';

        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                //HURRAY!! We are connected. :)
                console.log('Connection established to', url);

                // do some work here with the database.
                var mediaList = [];
                var getMediaList = function(db, callback) {
                    var cursor = db.collection('media').find( );
                    console.log('nothing to see here');
                    cursor.each(function(err, doc) {
                        console.log(count);
                        count++;
                        assert.equal(err, null);
                        if (doc != null) {
                            console.log(doc);
                            mediaList.push(doc);
                        } else {
                            console.log('Closing connection');
                            callback();
                        }
                    });
                    
                }(db, db.close());

                //Close connection
                
            res.send('The video id is ' + videoId + '\nThe data is\n' + JSON.stringify(data) + "\n The current media list is : \n" + JSON.stringify(mediaList));
                
            }
            
        });
        
        
    });
});

module.exports = router;
