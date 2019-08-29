const { fetchMyIp, fetchCoordsByIP,fetchISSFlyOverTimes,nextISSTimesForMyLocation } = require('./iss');
//for testing purpose
// fetchMyIp((error,ip)=>{
//   if (error){
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(`Here is your ip address ${ip}`);
// })
// fetchCoordsByIP("172.46.0.100", (error, location) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(location);
// });


// fetchISSFlyOverTimes({ latitude: '37.75100', longitude: '-97.82200' }, (error,result)=>{
//   if (error){
//     console.log(error);
//     return;
//   }
//   console.log(result);
// })

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});