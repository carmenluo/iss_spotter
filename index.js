const { fetchMyIp, fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');
//for testing purpose
// fetchMyIp((error,ip)=>{
//   if (error){
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(`Here is your ip address ${ip}`);
// })
fetchCoordsByIP("172.46.0.100", (error, location) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(location);
});


fetchISSFlyOverTimes({ latitude: '37.75100', longitude: '-97.82200' }, (error,result)=>{
  if (error){
    console.log(error);
    return;
  }
  console.log(result);
})