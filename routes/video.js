var express = require('express');
var router = express.Router();

var getYoutubeVideoById = require('../datasources/youtube/getYoutubeVideoById');
var addMedia = require('../datasources/mongo/addMedia');

router.get('/:youtubeId', function(req, res, next) {
    getYoutubeVideoById(req.params.youtubeId).then(function(youtubeVideo) {
        // extract needed fields from youtubeVideo for media database
        var media = {};
        console.log(youtubeVideo);
        addMedia(media).then(function(insertedMedia) {
            res.status(201).json(insertedMedia);
        }, function(error) {
            res.status(500).json(error);
        });
    }, function(error) {
        res.status(500).json(error);
    });
});

module.exports = router;