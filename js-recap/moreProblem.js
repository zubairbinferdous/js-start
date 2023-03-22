// // uper case and lower case

// const userName = 'ZuBair Bin Ferdous';
// console.log(userName.toUpperCase());
// const userInput = 'call me when u free';
// userInput.toLowerCase();
// console.log(userInput);


// //search the word 

// const lyrics = 'zuabir Bin ferdouS is A Developer';
// const search = 'Developer';

// // const doExit =  lyrics.includes('Developer');
// // const doExit =  lyrics.includes(search);

// const lowerCase = lyrics.toLowerCase();
// const searchLower = search.toLowerCase();
// const doExit = lowerCase.includes(searchLower);
// console.log(doExit);
// console.log(lowerCase.indexOf('developer'));

// if (lyrics.indexOf('Developer') !== -1) {
//     console.log('ok thnaks it is')
// }else{
//     console.log('hoy nai tor progrmmer')
// }

// //start with 

// console.log(lyrics.startsWith('ami'));

// //end with

// const file = "news.pdf";
// console.log(file.endsWith('.pdf'));

// // split and slice and join

// const data = 'this is my pc , and i have a some many game there , but now i can not play';
// const word = data.split(' ');
// const chars = data.split('');
// const part3 = data.split(',')
// const part4 = data.slice(10 , 39);
// const part5 = data.substring(5 , 45);

// console.log(word);
// console.log(part3);
// console.log(chars);
// console.log(part4);
// console.log(part5);

// const song = [
//     'tumni amr sada pakhi',
//     'tumi jano ki amr jibone',
//     'tomare ami chite pari nai'
// ]

// const newSong = song.join('::');
// console.log(song);
// console.log(newSong);


// // math in js 

// // power use in math 
//  const result = Math.pow(3,3);
//  console.log(result);


//  // age gap 

//  const num1 = 21;
//  const num2 = 45;

// //  const gap  = num1 - num2;
// //  console.log(gap)
//  const gap2  = Math.abs(num1 - num2);
// //  console.log(gap2);
//  if (gap2 < 5) {
//     console.log('yes world we are friend')
//  }else{
//     console.log('hello end we are not friend')
//  }

//  //round
//  const number = 2.455;
//  const round = Math.round(number);
//  const round2 = Math.ceil(2.3333);
//  const round3 = Math.floor(2.4444);
//  const rendom = Math.round(Math.random()*100);


//  console.log('round of' , round);
//  console.log('round three', round2);
//  console.log('round four', round3);
//  console.log('rendom number', rendom);

// var one = Math.random();
// one *= 100;
// console.log('hello world rendom' , one);
// console.log('hello world rendom' , Math.round(one));


// //swap for a variable 
// let first = 10;
// let secound = 20;
// console.log("swap" , first , secound)
// const temp = first;
// first = secound;
// secound = temp;
// console.log("swap", first , secound);


// // how is the big

// const ami = 300;
// const tumi = 400;
// const apni = 500;

// if (ami > tumi && ami > apni) {
//     console.log('ami is the best boy');
// }else if (tumi > ami && tumi > apni ){
//     console.log('tumi is the best boy ');
// } else {
//     console.log('apni is the best boy ');
// }

// // use max and min 
// var max = Math.max(ami , tumi , apni);
// var min = Math.min(ami , tumi , apni);
// console.log(max , min);


// find the big number of array 

function maxNumber(number){
 let largest = number[0];
 for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > largest) {
        largest = element;
    }
 }
 return largest;
}
const  heights = [120, 140, 130, 150, 180 , 300];
const  tallest = maxNumber( heights);
console.log('tallest person is ' , tallest);

