const request = require('request');
const catBreed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log("No information is available on this breed");
  }
  console.log(data[0].description);
});

