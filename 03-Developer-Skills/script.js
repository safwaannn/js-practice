// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// console.log(x);
// console.log(2 * 9);
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps, temp) {
//   let max = temps[0];
//   let min = temp[0];

//   for (let i = 0; i < temps.length; i++) {
//     const calTemp = temps[i];

//     if (typeof calTemp !== 'Number') continue;

//     if (calTemp > max) max = calTemp;

//     if (calTemp < min) min = calTemp;
//   }
//   //   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// challengee..........////////////////////////

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// ... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]} in day ${i + 1} day... `;
//   }
//   console.log(str);
// };

// printForecast(data1);
// printForecast(data2);
