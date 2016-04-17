var express = require ("express");
var app = express();
var request = require("request");

var url = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_ACS.json" 

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})
app.listen(8080);
console.log("Servidor conectado puerto 8080")