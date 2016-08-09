var express = require('express');
var router = express.Router();
  
/* POST youtube information */
router.get('/:Id', function(req, res, next) {
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
                res.send("Sorry that isn't a valid youtube ID :");
            } else {   
                
                var snippetinfo = data.items[0].snippet;   
                res.send("Title is : " + snippetinfo.title + "<br />" +
                        "Description is :" + snippetinfo.description); 
                
            }  
     });
});

router.get('/', function(req,res,next) {
    res.send("you're not supposed to be here!");
});

module.exports = router;