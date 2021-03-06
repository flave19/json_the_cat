const request = require("request");
// const input = process.argv.slice(2);

const fetchBreedDescription = function(input, callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + `${input}`;
  request(URL, (error, response, body) => {
    const data = JSON.parse(body);

    if (response.statusCode === 404) {
      callback("invalid URL", null);
    } else if (data.length === 0) {
      callback("breed not found", null);
    } else {
      callback(null, `${data[0].description}`);
    }
  });
};

module.exports = { fetchBreedDescription };

// request(URL, (error, response, body) => {
//   const data = JSON.parse(body);
//   console.log(data[0].description)

//   if (response.statusCode === 404) {
//     console.log("not found ");
//     return;
//   }
//   if (data.length === 0) {
//     console.log("breed not found");
//   }
// });
