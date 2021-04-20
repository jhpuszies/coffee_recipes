const axios = require('axios');
const params = {
  access_key: '72cd2b6e56f8b9c22d295b9a7cf84905',
  query: 'New York'
}

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Aktuelle Temperatur jetzt aktuell in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    console.log(apiResponse);
  }).catch(error => {
    console.log(error);
  });
