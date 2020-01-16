const request = require("request");

const input = process.argv.slice(2);

const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + input[0];
// const filePath = input[1]

// console.log(response.statuscode())

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  // console.log(data[0].description)
  console.log(response.statusCode);
  if (response.statusCode === 404) {
    console.log("not found ");

    return;
  }
  if (data.length === 0) {
    console.log("breed not found");
  }
});

// console.log(typeof body)

// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);
