const express = require('express')
const fs = require("fs")
const moment = require("moment")
const PORT = process.env.PORT || 3000;
const app = express()
// use moment to map out time left till arrival on the arrivals page

//use moment to map out every departure ex every 20min from current moment it leaves//

const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime);

const futureTime = moment().add(30, 'minutes').format('MMMM Do YYYY, h:mm:ss a');
console.log(futureTime)

// const timeLeftTillArrival = function(currentTime){
//     for (var i = 0; i < timeLeftTillArrival; i++) {
//         if (currentTime === timeLeftTillArrival[i]) {
//           return res.json(timeLeftTillArrival[i]);
//         }
//       }
// };
// timeLeftTillArrival();
// console.log(timeLeftTillArrival)
