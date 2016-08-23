var express = require('express');
var router = express.Router();
  
/* POST youtube information */
router.post('/:Id', function(req, res, next) {
    var videoId=req.params.Id;
    
    var Youtube = require("youtube-api");
    
    Youtube.authenticate({
        type: "key"
      , key: "AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w"
    });
                    
    Youtube.videos.list({
        id:videoId,
        part:"snippet"                              
    }, function(err, data) {
            if(err) {
                res.send("Sorry that isn't a valid youtube ID :(");
            } else {   
			
				var mongodb = require('mongodb');
				var MongoClient = mongodb.MongoClient;
				var url = 'mongodb://knockknock:gitgud2016@ds023902.mlab.com:23902/untitled'
				
				MongoClient.connect(url, function (err, db) {
					  if (err) {
						console.log('Unable to connect to the mongoDB server. Error:', err);
					  } else {
						//HURRAY!! We are connected. :)
						console.log('Connection established to', url);

						// do some work here with the database.
                        db.collection('media').insertOne( {
                            "mid":(Math.round(Math.random() * (9999999-1000000) + 1000000)),
                            "mediaTypeId":"1",
                            "metadata":{"title":snippetinfo.title,
                                        "description":snippetinfo.description}
                        }, function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Send to MongoDB!");
                            }      
                        });

						//Close connection
						db.close();
					  }
					});
                
                var snippetinfo = data.items[0].snippet;   
                res.send("Title is : " + snippetinfo.title + "<br />" +
                        "Description is : " + snippetinfo.description); 
                
            }  
     });
});

router.get('/', function(req,res,next) {
    res.send("Something goes here.");
});

module.exports = router;