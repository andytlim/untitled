var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/youtube/:videoId', function(req, res, next) {
    var videoId = req.params.videoId;
    
    var Youtube = require("youtube-api");

    Youtube.authenticate({
        type: "key"
      , key: "AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w"
    });

    Youtube.search.list({
        q: "hello",
        part: "snippet"
    }, function (err, data) {
        res.send('The video id is ' + videoId + '\nThe data is\n' + JSON.stringify(data));
    });
    
});

module.exports = router;
