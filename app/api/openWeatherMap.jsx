var axios = require('axios');

const APIKEY= "8e98588bcb1e65c7b65732af64b65897";
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&units=imperial&q=`;

module.exports = {
    getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}`;

      return axios.get(requestUrl).then(function(response){
         if(response.data.cod && response.data.message){

             throw new Error(response.data.message);
         } else{
             return response.data.main.temp;
         }
      }, function(err){
          //debugger;
          throw new Error(err);
      });
    }
}
