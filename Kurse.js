const axios = require('axios');
const params = {
  access_key: '831b04aa05ea19f0ae98e72fbd2c9d25',
  symbols: 'AAPL,MSFT'
}
  axios.get('http://api.marketstack.com/v1/eod/latest', {params})
  .then(response => {
    const apiResponse = response.data;
    if (Array.isArray(apiResponse['data'])) {
        apiResponse['data'].forEach(stockData => {
              console.log(`Ticker ${stockData['symbol']}`,
                  `has a day high of ${stockData['high']}`,
                  `on ${stockData['date']}`);
        });
    }
  }).catch(error => {
    console.log(error);
  });

Test

XXXX