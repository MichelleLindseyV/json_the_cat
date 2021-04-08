
const request = require('request');



 
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback("Breed not found", null);
      }
      let desc = (data[0]["description"]);
      return callback(null, desc);
    }
    //console.log('statusCode:', response && response.statusCode);
  });
};

module.exports = { fetchBreedDescription };