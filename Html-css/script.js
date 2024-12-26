'use strict';


//Examples of function
// function addTwo(x,y){
//     console.log ('done');
//     return x + y;

// }

// let result = addTwo(4 ,5);
// console.log(result);    

// function yourName(name,place){
//     console.log(`Heyy!! I'am ${name} from pune.`);
// }
// yourName('Safwan');

// function calculateSquare(a){
//     return a*a;
// }

// let result = calculateSquare(4);
// console.log(result);

// function evenOdd(a){
//     if( a %2 === 0){
//       console.log('The number is even');
//     }else{
//         console.log('the number is odd');
//     }
// }
// // evenOdd(6)
// let result = evenOdd(8);
// console.log(`check the number is even or odd--> ${result}`)

// function validateEmail(email) {
//     // Regular expression for email validation
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email); // Returns true if the email matches the regex, false otherwise
// }

// Example Usage:
// console.log(validateEmail("safwanghare89@gmail.com")); // Outputs: true
// console.log(validateEmail("invalid-email@"));   // Outputs: false

// Function Declarations vs. Expressions

// Function Declarations
// function birthYear1(age){
//     return 2024 - age;
// }
// const result1 = birthYear1(2006);

// // Function Expressions
// const birthYear2 = function (age){
//     return  2024 - age;
// }
// const result2 = birthYear2(2006);
// console.log(result1 , result2);


// Arrow functions

// const calage = birthYear => 2024 - birthYear;
// const age = calage(2006);
// console.log(age);

// const calage2 = birthYear2 => {
//     const age = 2024 - birthYear2;
//     const retiement = 60 - age;
//     return retiement;
// }

// const result = calage2(1999);
// console.log(result);

// const square = off => off *off;

// const ans = square(8);
// console.log(ans);

// const evenOdd = check=> {
// const result = check % 2=== 0 ? "Even" : "Odd" ;
// return result;
// }
// const ans = evenOdd(prompt( 'check numbers'));
// console.log(ans);


// Functions Calling Other Functions


// const cutedPieces = function  (fruit){
//     return fruit * 4;
// }

// function fruitProcesser(apple ,orange){
//     const applePieces = cutedPieces(apple);
//     const orangePieces = cutedPieces(orange);
    
//     const juice =   `here are pieces of apples ${applePieces} and orange ${orangePieces} Pieces`;
//     return juice;
// }

// const result = fruitProcesser( 3,3);
// console.log(result);

// Reviewing Functions

// const calage = function (birthYear){
//     return 2024 - birthYear;
// }

// function yearForRetirement(birthYear , firstName ){
//     const age = calage(birthYear);
//     const retirement = 60 - age;
//      if(retirement > 0){
//         return console.log(`${firstName} will retire in ${retirement} years`);
//      }else{
//         return console.log(`you have already been retierd`);
//      }
// }
// console.log(yearForRetirement(2006 , 'safwan'));
// console.log(yearForRetirement(1950 , 'salim'));

// const calaverage = (s1,s2,s3) => {
//     return  (s1 + s2 + s3) / 3;  
// }

// function checkWinner (d1,d2,d3,k1,k2,k3){
//     const avgDolphins = calaverage(d1,d2,d3);
//     const avgkoalas = calaverage(k1,k2,k3);

//     if( avgDolphins >= 2* avgkoalas) {
//         return console.log(`the Dolphins teams wins by ${avgDolphins}`);
//     }else if (avgkoalas >= 2* avgDolphins){
//         return console.log(`the kolasa teams wins by${avgkoalas}`);
//     }else{
//         return "no wins"
//     }

// }

// console.log(checkWinner(44,32,71,65,54,49));
// console.log(checkWinner(85, 54 ,41, 23, 34 ,27));
     

// console.log(calaverage(3,8,10));

///////////////////////////////////////
// Introduction to Arrays

// const friend = ['michel','john','dome'];
// console.log(friend);

// const y = new Array (2002,1998,2022,1999);
// console.log(y);

// console.log(y[2 ]);
// console.log(y[y.length - 1]);
// console.log()

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
//   }

//   const year = [1991, 2020,1999,2001 ];

//   const age1 = calcAge (year[0]); 
//   const age2 = calcAge (year[1]);
//   const age3 = calcAge (year[2]); 

//   console.log(age1 , age2 , age3 );
//   const age = [calcAge(year[0]) ,calcAge(year[1]) ,calcAge(year[2])];
//   console.log(age);


// Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

//   const bill = [125, 555, 44];
//   const tip = [calcTip(bill[0]), calcTip(bill[1]) , calcTip(bill[2])];
//   const total =  (bill[0] + tip[0], bill[1] + tip[1] , bill[2] + tip[2]);

//   console.log( bill ,tip , total);

///////////////////////////////////////
// Introduction to Objects

// const details = {
//     firstName: 'safwan',
//     lastName: 'Ghare',
//     class:'FYBCA',
//     age: 2024 - 2006,
//     freinds: ['shahid','musab','Amir']
// };

///////////////////////////////////////
// Dot vs. Bracket Notation


// const details = {
//     firstName: 'safwan',
//     lastName: 'Ghare',
//     class:'FYBCA',
//     age: 2024 - 2006,
//     freinds: ['shahid','musab','Amir']
//  };
// console.log(details);

// console.log(details.firstName);
// console.log(details ['lastName']);

// // const nameKey= Name;
// // console.log(details['first' + nameKey]);
// // console.log(details['last' + nameKey]);

// const interestedIn = prompt(`what you should know about firstname ,lastname,age,class,freinds`);

// if (details[interestedIn]){
//     console.log(details[interestedIn]);
// }else{
//     console.log(`wrong request !! you should know about firstname ,lastname,age,class,freinds`)
// }


// details.location = 'pune';
// details['twitter'] = '@safwaannnn_';
// console.log(details)

// safwan has 3 friends, and his best friend is called shahid.
//  console.log(`${details.firstName} has ${details.freinds.length} freinds and his best freind is called as ${details.freinds[0]}`);

// const details = {
//     firstName: 'safwan',
//     lastName: 'Ghare',
//     job:'teacher',
//     birthYear: 1991,
//     freinds: ['shahid','musab','Amir'],
//     hasDrivingLicence: true,
//     calcage : function(){
//         return 2037 - this.birthYear;
//     },
//     calcAge : function (){
//         this.age = 2037 -this.birthYear;
//        return this.age; 
//     },
//       getSummary : function(){
//         return console.log(`${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDrivingLicence ? 'a' : 'no'} driver's licence `);

//     }

    
//  };


//  console.log(details.calcage());

//  "safwan is a 46-year old teacher, and he has a driver's license"
//  console.log(details.getSummary());

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// const markMiller ={ 
//     firstName: 'mark',
//     lastName : 'miller',
//     height : 1.69,
//     weight : 78,

//     calcBmi : function() {
//         this.bmi = this.weight / (this.height ** 2);
//     return this.bmi;
//     }
// }

// const johnSmith ={
//     firstName: 'john',
//     lastName : 'smith',
//     height : 1.95,
//     weight : 92,
    

//     calcBmi : function() {
//         this.bmi = this.weight / (this.height ** 2);
//     return this.bmi;
//     },
// };

// johnSmith.calcBmi();
// markMiller.calcBmi();

// if(johnSmith.bmi > markMiller.bmi ){
//     console.log(`${johnSmith.firstName} BMI ${johnSmith.bmi} is higher than ${markMiller.firstName} ${markMiller.bmi}!`);
// }else{
//     console.log(` ${markMiller.firstName} Bmi ${markMiller.bmi} is higher than ${johnSmith.firstName} ${johnSmith.bmi}!`);
// };

// console.log(johnSmith.bmi());
// console.log(markMiller.bmi());


///////////////////////////////////////
// Iteration: The for Loop.


// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for(let rep =1; rep <= 10 ; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }

// for(let rep =100;rep <= 999 ; rep++){
//     console.log(`I LOVE YOU ${rep} ❤️  `)
// }


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];


//   for( let i=0 ; i< joans ; i++){
//     console.log(jonas[i]);
//   }


// const year = [1991 ,2002,1999,2006];
// const age = [];

// for(let i = 0 ; i< year.length; i++){
//     age.push(2027 - year[i]);
// }

// console.log(age);

//continue an break 

// console.log('---continue---');
// for (let i=0 ;i < jonas.length; i++){
//   if(typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i] ,typeof jonas[i]);
// }
// console.log('---break---');
// for (let i=0 ;i < jonas.length; i++){
//   if(typeof jonas[i] === 'number') break;

//   console.log(jonas[i],typeof jonas[i]);
// }



///////////////////////////////////////
// Looping Backwards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
//   false
// ]

// for (let i = jonas.length -1 ; i >=0 ;i--){
//   console.log(i, typeof jonas[i],jonas[i]);
// };


// // /loops in loops

// for(let i =1 ; i < 4; i++){
//   console.log(`Starting Exercise ${i}`);

//   for(let rep = 1 ; rep < 6; rep++){
//     console.log(`Exercise ${i} : Lifting weihgt left ${rep}`)
//   }
// }

///////////////////////////////////////
// The while Loop


// let i =1;
// while (i<=10){
//   console.log(`lifting weight ${i}`);
//   i++
// };


// let dice = Math.trunc(Math.random() * 6 ) + 1;

// while (dice !== 6){
//   console.log(`You rolled a dice ${dice}`);
//   dice= Math.trunc(Math.random() * 6 ) + 1;

//   if(dice === 6)console.log('Loop is about to end...');
// };

/* let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
} */



  ////////////////////////////////
  //challege 4
 /*  Step 1: Create an array of bills
  You need to create an array called bills containing 10 given test values:
  22, 295, 176, 440, 37, 105, 10, 1100, 86, 52.
  
  This array represents the original amounts of money (bills).
  
  Step 2: Create empty arrays for tips and totals
  Create two empty arrays, tips and totals, where:
  
  tips will store the calculated tips for each bill.
  totals will store the total amount (bill + tip) for each bill.

  Create the bills array.
Create empty tips and totals arrays.
Use a for loop to:
Calculate tips using calcTip.
Push tips into the tips array and total amounts into the totals array.
Write the calcAverage function and call it with the totals array to get the average. */

const bills =[
  22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const  tips =[];

const totals= [];

function calcTip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

 for (let i=0;i < bills.length; i++){
     const tip = calcTip(bills[i]);

     tips.push(tip);

     totals.push(tip + bills[i]);
};


 console.log(`the total tips ${tips}`);

 console.log(`the total is ${totals}`);

 const calcAverage = function(arr){
  let sum =0;
  for( let i=0;i< arr.length;i++){
   // sum = sum + arr[i];
    sum +=arr[i]
  }
  return sum/  arr.length;
 };

 console.log(calcAverage(totals));
 console.log(calcAverage(tips));
