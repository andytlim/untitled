var express = require('express');
var router = express.Router();

var getYoutubeVideoById = require('../core/datasources/youtube/getYoutubeVideoById');
var addMedia = require('../core/datasources/mongo/addMedia');

router.post('/:youtubeId', function(req, res, next) {
    getYoutubeVideoById(req.params.youtubeId).then(function(video) {
      var media = {};
      addMedia(video).then(function(result) {
        res.status(200).json(result);
      }, function(err) {
        res.status(500).json(err);
      });
    }, function(err) {
      res.status(500).send(err.stack);
    });
});

module.exports = router;