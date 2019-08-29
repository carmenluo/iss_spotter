const { fetchMyIp, fetchCoordsByIP } = require('./iss');
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
})
