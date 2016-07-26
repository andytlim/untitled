var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Respond with some kind of HTML page.');
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
