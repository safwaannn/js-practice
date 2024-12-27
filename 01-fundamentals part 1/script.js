/* let age='30';
console.log("age");

let firstName = 'safwan';
console.log("firstname");

const safwanage = 2006 - 2025;
console.log(safwanage);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); */

// Basic Operators
// Math operators
/* const now = 2024;
const safwanage = now - 2006;
const salimage = now - 1972;
console.log(safwanage , salimage);

console.log(safwanage * 2 , salimage / 2 ** 3);

let firstName = 'safwan';
console.log(firstName);

let lastName = 'ghare';
console.log(lastName);

console.log(firstName+' '+ lastName); */

/* //aritmatic operators

let x = 25 + 10; // 35
x += 10;  // x = x + 10
x *=4;
x++;
x--;
x--;
console.log(x); */

//declare const

/* const markmass = 78;
const markHeight =1.69;
const johnMass = 95;
const johnheight = 1.88; */

/* const markmass = 95;
const markHeight =1.88;
const johnMass = 85;
const johnheight = 1.76;

 const markbmi = markmass / markHeight ** 2 ;
 const johnbmi = johnMass / johnheight ** 2 ;

 let markhigherbmi = markbmi > johnbmi;

 console.log(markbmi,johnbmi,markhigherbmi);
 */
// Strings and Template Literal
/*  const firstName = 'Safwan';
 const job = 'frontend devloper';
 const year = '2024';
 const birthYear = '2006';

 const safwan = "I'am " + firstName + " , a " + (year - birthYear) + " years old " + job;
 console.log(safwan); */

/*  const firstName = 'Safwan';
 const job = 'frontend devloper';
 const year = '2024';
 const birthYear = '2006';

 const safwan = `I'am ${firstName} ,a ${year - birthYear} years old ${job}`;
 console.log(safwan); */

 //new line

/*  console.log('safwan \n\ salim\n\ ghare');

 console.log(`safwan
    salim
    ghare`); */


    // Taking Decisions: if / else Statements

/*     const age = 13;
    const leftage = 18 - age

    if(age >= 18){
        console.log(`You are Eligible for driving`);
    }else{

        console.log(`you are not eligible for driving. wait for ${leftage} years to attempt for licence`);
    } */

/*       const birthYear = 2002;
      let century;
      if(birthYear <= 2000){
        century = 20;
      }else{
        century = 21;
      }
      console.log(`you are of ${century} century`); */

      // Coding Challenge #2
  /*     const markmass = 95;
      const markHeight =1.88;
      const johnMass = 85;
      const johnheight = 1.76; */

/*       const markmass = 78;
      const markHeight =1.69;
      const johnMass = 95;
      const johnheight = 1.88;

      const markbmi = markmass / markHeight ** 2 ;
      const johnbmi = johnMass / johnheight ** 2 ;

      if(markbmi>johnbmi){
        console.log(`mark BMI ${markbmi} is higher than john's BMI ${johnbmi}`);
      }else{
        console.log(` john's BMI ${johnbmi}  is higher than mark BMI ${markbmi}`);
      } */

// type coercion
/* console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); */

// falsy values: 0, '', undefined, null, NaN
/* 
const money = 3;
if(money){
    console.log(true);
}else{
    console.log(false);
} */

    // Equality Operators: == vs. ===

/*     const  marks = Number(prompt('Enter your marks' ));
    
    if(marks === 200){
        console.log('you are passed');
    }else if (marks === 400){
        console.log('you are absoluteley passed');
    }else if(marks!==200){
        console.log('you are fail')
    }else{
        console.log('you are on average');
    } */

        // Logical Operators

        /* const canDrive = true;
        const hasvision = true;
        
        if(canDrive && hasvision){
            console.log('sarah can drive');
        }else{
            console.log('someone else should drive');
        } */

        //     const canDrive = true;
        // const hasvision = true;
        // const tired = true;
        
        // if(canDrive && hasvision  && !tired){
        //     console.log('sarah can drive');
        // }else{
        //     console.log('someone else should drive');
        // }


 // Coding Challenge #3
    // const dolphins = (96 + 108+ 89)/ 3;
    // const koalas = (88 + 91+ 110)/ 3;
    // console.log(dolphins , koalas)

    // if(dolphins > koalas){
    //     console.log('Dolphin teams wins ');
    // }else if(dolphins < koalas){
    //     console.log('koalas teams wins ');
    // }else if(dolphins === koalas){
    //     console.log('both teams wins');
    // }
        // const dolphins = (96 + 108+ 89)/ 3;
        // const koalas = (88 + 91+ 110)/ 3;
        // console.log(dolphins , koalas)
    
        // if(dolphins > koalas && dolphins >= 100){
        //     console.log('Dolphin teams wins ');
        // }else if(dolphins < koalas && koalas >= 100){
        //     console.log('koalas teams wins ');
        // }else if(dolphins === koalas && dolphins>= 100 && koalas >= 100){
        //     console.log('both teams wins');
        // }else{
        //     console.log('both teams losses');
        // }


        // The switch Statement

        //  const day = 'wednesay';
        //  switch (day){
        //     case 'monday':
        //         console.log('today is the study time');
        //         console.log('javascript');
        //         break;
        //         case 'tuesday':
        //         console.log('i will go for a walk');
        //         break;
        //         case 'wednesday':
        //         case 'thursday' :   
        //         console.log('i will go for gym');
        //         break;
        //         case 'friday':
        //         console.log('pray');
        //         break;
        //         case 'saturday':
        //         case 'sunday':
        //         console.log('weekends');
        //         break;
        //         default:
        //             console.log('Invalid day');
        //  }

        //coding practice
        // const day =prompt('what is the day');

        // if(day === 'monday'){
        //     console.log('study time');
        // }else if(day === 'tuesday'){
        //     console.log('walk');
        // }else if(day === 'wednesday' || day === 'thursday'){
        //     console.log('gym');
        // }else if(day === 'friday'){
        //     console.log('pray');
        // }else if(day === 'saturday' || day === 'sunday'){
        //     console.log('weekends');
        // }else {
        //     console.log('Invalid day');
        // }

        // The Conditional (Ternary) Operator


        // const age = 15;
        // age >=18 ? console.log('you can drink wine') : console.log('you can drink water');

        // const drink = age>= 18 ? 'wine' : 'water';
        // console.log(drink);

        // console.log(`you can drink ${age>= 18 ? 'wine' : 'water'}`) ;


        // coding challege 4

        // const bill = 430;
        // tip = bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.20;
        // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);