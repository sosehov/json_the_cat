const needle = require('needle');

const args = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const searchQuery = url + args;

needle.get(searchQuery, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }

  if (response.statusCode === 404) {
    console.log('Breed not found!');
  }

  console.log('error:', error);
  console.log('statusCode:', response && response. statusCode);
  console.log('body:', body);
  //console.log(typeof body);
  console.log(body[0].description);
});