const request = require('request');

const fetchMyIp = function (callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (body) {
      callback(null, JSON.parse(body)["ip"]);
    }

  })
}
const fetchCoordsByIP = function (ip, callback){
  request(`https://ipvigilante.com/${ip}`,(error, response,body) =>{
    if (error){
      callback(error);
      return;
    }
    if (response.statusCode !== 200){
      const msg = `Status cade ${response.statusCode} when getting location. Response: ${body}`;
      callback(Error(msg),null);
      return;
    }
    // let result ={};  
    // result["latitude"] = JSON.parse(body)["data"]["latitude"];
    // result["longitude"] = JSON.parse(body)["data"]["longitude"];
    // callback(null, result);
    const {latitude, longitude} = JSON.parse(body).data;
    callback(null,{latitude,longitude});
  })
}

module.exports = { fetchMyIp,
fetchCoordsByIP };
// const fetchCoordsByIP = function(ip, callback) {
//   request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
//       return;
//     }

//     const { latitude, longitude } = JSON.parse(body).data;

//     callback(null, { latitude, longitude });
//   });
// };
