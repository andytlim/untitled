var mongodb = require('mongodb');

module.exports = mongodb.MongoClient.connect(process.env.MONGODB_URI);