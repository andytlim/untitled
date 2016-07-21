var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mike_youtube', function(req, res, next) {
  console.log("Mike");
  console.log(req.body.user);
  console.log(req.body.YT_VID);
var request = require('request');
request('https://www.googleapis.com/youtube/v3/videos?id=ec9i_iGCj80&key=AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w&fields=items(snippet(title,description))&part=snippet', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        var jsonres=JSON.parse(body);
        console.log(jsonres.items[0].snippet.title) // Show the HTML for the Google homepage. 
       // Retrieve
        var MongoClient = require('mongodb').MongoClient;

        // Connect to the db
        MongoClient.connect("mongodb://lambem:hopethisworks@ds023902.mlab.com:23902/untitled", function(err, db) {
        if(!err) {
            console.log("We are connected");
            var collectiondb = db.collection("mike_video");
            db.collection("mike_video").insertOne( {"id" : "7464", "title" : jsonres.items[0].snippet.title});
        } else {console.log(err);
        }
        });
  }
});

  //var xmlHttp = new XMLHttpRequest();
  //var url="www.googleapis.com/youtube/v3/videos?id=ec9i_iGCj80&key=AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w&fields=items(snippet(title,description))&part=snippet";
  //xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  //xmlHttp.send( null );
  //console.log(xmlHttp.responseText);
  res.render('index', { title: 'Express_youtube' });
});

module.exports = router;
