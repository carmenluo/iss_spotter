const request = require('request-promise-native');
const fetchMyIp = function () {
  return request('https://api.ipify.org?format=json');
}
const fetchCoordsByIp = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
};
const fetchISSFlyOverTimes = function (body) {
  //  console.log(body);
  const coords = JSON.parse(body).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`)
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIp()
    .then((result) => { return fetchCoordsByIp(result) })
    .then((body) => { return fetchISSFlyOverTimes(body) })
    .then(result => {
      const data = JSON.parse(result).response;
      return (data);
   //   return data;
    })
}
module.exports = { nextISSTimesForMyLocation };