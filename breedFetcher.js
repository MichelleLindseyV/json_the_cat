

const request = require('request');

let userInput = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 


  const data = JSON.parse(body);
  console.log(data[0]["description"]);
  // console.log(typeof data);
  
});

// if (userInput === "undefined") {
  //   console.log("Breed not found")
  //   return;
  // } else {
 