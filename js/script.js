"use strict";
// let js = "amazing";
// if (js === "amazing") alert("js is fun!");
// let PI = 4;
// booltype = false;
// console.log(booltype);
// booltype = 10;
// console.log(typeof {});
// function hel(x, y)
// {console.log('hello');}
// hel();
// let height;
// if (height !== NaN) {
//   console.log('Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }
// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1991) );
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]
// };
// // console.log(jonas.lastName);
//  const interestedIn = prompt('What do you want to know about Jonas?'); 

// console.log(jonas[interestedIn]); 
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills =[22,295,176,440,37,105,10,1100,86,52];
const tips =[];
const totals =[];
for(let i=0;i<bills.length;i++)
{tips.push(calcTip(bills[i]));
totals.push(bills[i]+tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(totals)
{    let sum=0; 
    for(let i=0;i<totals.length;i++)
    {sum+=totals[i];}
    return sum/totals.length;
}
console.log(calcAverage(totals));