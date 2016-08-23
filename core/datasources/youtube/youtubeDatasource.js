var Youtube = require("youtube-api");

Youtube.authenticate({
  type: 'key',
  key: 'AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w'
});

module.exports = Youtube;