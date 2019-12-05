const request = require('request');
const breed = process.argv[2];

const website = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(website, (error, response, body) => {
  //   if (JSON.parse(body)["status"] === 404) {
  //   } else {
  //     // console.log(body);
  //     // console.log(error);
  //     const data = JSON.parse(body);
  //     if (data.length === 0) {
  //       console.log(`Sorry, we didn't find anything!`);
  //     } else {
  //       console.log(data[0]["description"]);
  //     }
  //   }
  // });
  if (JSON.parse(body)['status'] === 404) {
    console.log("Please check the URL and try again later!");
    return;
  } else {
    let obj = body;
    lookupBreed(website, obj);
  }
  //console.log(typeof data);
});
const lookupBreed = (website, body) => {
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('no data found');
    return;
  }
  console.log(data[0]["description"]);
};