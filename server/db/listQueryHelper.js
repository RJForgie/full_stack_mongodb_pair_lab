var MongoClient = require('mongodb').MongoClient

var listQueryHelper = {
  url: "mongodb://localhost:27017/bucketlist",
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var listCollection = db.collection("countries")
      listCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    })
  },
  save: function (countryData, onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var listCollection = db.collection("countries")
      console.log(countryData);
      listCollection.insert(countryData)

      listCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = listQueryHelper
