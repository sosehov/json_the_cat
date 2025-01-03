const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q= ${breedName}`;

  needle.get(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
  
    if (response.statusCode !== 200) {
      return callback(Error(`Failed to fetch breed information. Status Code: ${response.statusCode}`), null);
    }

    const breed = body[0];
    if (breed) {
      return callback(null, breed.description);
    } else {
      return callback(Error('Breed not found'), null);
    }
  });
};

module.exports = { fetchBreedDescription };