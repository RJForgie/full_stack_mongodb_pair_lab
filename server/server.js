var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var listRouter = require('./controllers/list_controller.js')
app.use("/api/bucketlist", listRouter)

app.use(express.static(__dirname + "/../client/build"))

app.listen(3000, function () {
  console.log("working!");
})
