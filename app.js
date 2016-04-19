var express = require ("express");
var app = express();
var request = require("request");

var url = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_ACS.json" 

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
    	var parseo = body.dataset.data;
    //   	console.log(body.dataset.data[10]);
    var jsonString=[];
       //	for (var i=0; i < parseo.length; i++ ) {
       		var jsonDato = {};
       		jsonDato.date = parseo[0][0];
       		jsonDato.openn = parseInt(parseo[0][1]);
       		jsonString.push(jsonDato);
       		//console.log(jsonDato);
       	//}
       	var jsonArray = JSON.parse(JSON.stringify(jsonString));
       	console.log(jsonArray);

       
    }
    //var obj = JSON.parse(data);
});
app.listen(8080);
console.log("Servidor conectado puerto 8080")