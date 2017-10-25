var requestHelper = require('./helpers/request_helper.js')
var currentSelectedCountry = undefined

var init = function () {
  makeRequest()
  renderBucketList()

  var submit = document.querySelector('button')
  submit.addEventListener('click', addCountryToBucketList)
}

var makeRequest = function () {
  var url = 'https://restcountries.eu/rest/v2/all'
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', function () {
    var countries = JSON.parse(this.responseText)
    addCountriesToList(countries)
    // console.log(countries);
  })
  xhr.send()
}

var addCountriesToList = function (countries) {
  var dropdown = document.querySelector('#select')
  countries.forEach(function(country, index) {
    var option = document.createElement("option")
    option.innerText = country.name
    option.value = index
    select.appendChild(option)
  })
  select.addEventListener('change', function () {
  currentSelectedCountry = countries[this.value]

  })
}

var addCountryToBucketList = function () {
  console.log(currentSelectedCountry)
  var url = "http://localhost:3000/api/bucketlist"
  var countryToSave = {
    name: currentSelectedCountry.name
  }
  requestHelper.postRequest(url, function (result) {
    renderBucketList()
  }, countryToSave
)}

var renderBucketList = function () {
  var ul = document.querySelector('ul')
  ul.innerHTML = " "
  requestHelper.getRequest('http://localhost:3000/api/bucketlist', function (countries) {
    console.log(countries)
    countries.forEach(function (country){
      var li = document.createElement('li')
      li.innerText = country.name
      ul.appendChild(li)
    })
  })
}




window.addEventListener('load', init)
