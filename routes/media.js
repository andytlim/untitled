var express = require('express');
var router = express.Router();

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

router.post('/:youtubeId', function(req, res, next) {
	
	console.log('This is the id: ' + req.params.youtubeId);

	//youtube-node library allows for interaction via YouTube API v3
	var YouTube = require('youtube-node');  
  
	var youTubeRequest = new YouTube();
	youTubeRequest.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');
	
	youTubeRequest.getById(req.params.youtubeId, function(error, youtubeJsonResponse) {
		if (error) {
			console.log(error);
		}
		else {
			
			console.log("Connected to YouTube without errors");
			console.log("This is the JSON response from YouTube:");
			console.log(JSON.stringify(youtubeJsonResponse, null, 2));
			
			//Convert the JSON object to string using "stringify" and break it up to pieces that can be referenced later using JSON.parse
			var parsedYoutubeJson = JSON.parse(JSON.stringify(youtubeJsonResponse, null, 2));
			
			//Since the response has been parsed the items inside can be referenced directly.  
			//"items" is an array object of length '1' returned in the YouTube response and 
			//snippet contains a set of key and value pairs containing metadata about the YouTube video.
			
			var youtubeVideoTitle = parsedYoutubeJson.items[0].snippet.title;
			var youtubeVideoDescription = parsedYoutubeJson.items[0].snippet.description;
			var youtubePublishDate = parsedYoutubeJson.items[0].snippet.publishedAt;
			
			console.log("YouTube video title is: " + youtubeVideoTitle);
			console.log("YouTube video published date is: " + youtubePublishDate);
			console.log("YouTube video description is: " + youtubeVideoDescription);
			
			//Connect to MongoDb
			var MongoClient = require('mongodb').MongoClient;
			
			//MLAB user and DB user are different - any new users have to be added to the DB itself
			MongoClient.connect("mongodb://knockknock:gitgud2016@ds023902.mlab.com:23902/untitled", function(mongoConnectionError, mongoDatabase) {
				
				if (mongoConnectionError){
					console.log(mongoConnectionError);
				}
				else {
					
					//Set collection to interact with
					var mediaMetadataDbCollection = mongoDatabase.collection("media");
					
					//Insert a document into the selected collection
					mediaMetadataDbCollection.insertOne(
						{
							"media_id" : "123",
							"external_media_id": req.params.youtubeId,
							"external_published_date" : youtubePublishDate,
							"media_title" : youtubeVideoTitle,
							"media_description" : youtubeVideoDescription
						}
					);
				}
			});
		}
	});
});

module.exports = router;
