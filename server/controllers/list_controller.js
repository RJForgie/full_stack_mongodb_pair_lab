var listQueryHelper = require('../db/listQueryHelper.js')
var express = require('express')
var listRouter = express.Router()

listRouter.get('/', function (req, res) {
  listQueryHelper.all(function (countries) {
    res.json(countries)
  })
})

listRouter.post('/', function (req, res) {
  var country = req.body

  listQueryHelper.save(country, function (updatedList) {
    res.json(updatedList)
  })
})

module.exports = listRouter
