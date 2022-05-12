const request = require('request');

const fetchBreedDescription = function(catBreed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode === 200 && JSON.parse(body)[0]) {
      callback(null, JSON.parse(body)[0].description);
      return;
    }
    callback("Cat not found.", null);

  });
};


module.exports = { fetchBreedDescription };

