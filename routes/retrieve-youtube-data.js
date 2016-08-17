//retrieve-youtube-data.js

exports.youtubeQueryById = function(youtubeVideoId){

	//youtube-node library allows for interaction via YouTube API v3
	var YouTube = require('youtube-node');  
  
	var youTubeRequest = new YouTube();
	youTubeRequest.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');
	
	youTubeRequest.getById(youtubeVideoId, function(error, youtubeJsonResponse) {
		if (error) {
			console.log(error);
		}
		else {
			
			var youtubeJsonDocument = JSON.stringify(youtubeJsonResponse, null, 2);
			//console.log("Connected to YouTube without errors");
			//console.log("This is the JSON response from YouTube:");
			//console.log(youTubeJsonResponse);
			
			//Convert the JSON object to string using "stringify" and break it up to pieces that can be referenced later using JSON.parse
			return youtubeJsonDocument;
			
		}
	});
}