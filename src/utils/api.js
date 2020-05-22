var axios = require('axios');
var Geohash = require('latlon-geohash');



module.exports = {

request: function(Type, obj) {
	//first parementer must be event or attraction, second paremeters must be city and state or geohash
	//loop through object and create strings for parameters "city=""stateCode="", geoPoint="
	Type = Type + "s"
	var parameter;
	for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        if(Object.keys(obj).length == 1){parameter = key + "=" + obj[key];} else {parameter = key + "=" + obj[key] + "&";}
    }
}
	URL = "https://app.ticketmaster.com/discovery/v2/"+Type+".json?apikey=6ab1lZGOtXzj3Obg8yRuTiCfl2GgxPG4&size=60&radius=70&" + parameter
	var encodedURI = window.encodeURI(URL);

	return axios.get(encodedURI).then(function (response) {
				return response.data;
			});
			
}

}