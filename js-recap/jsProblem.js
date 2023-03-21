
// inch to feet 
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var result = inchToFeet(70).toFixed(2);
result = parseFloat(result)
console.log('test now', result);

var nanaFeet = inchToFeet(66).toFixed(2);
console.log( 'nani feet',nanaFeet);

// mile to kelomiter 

function mileToKilo(mile) {
    var kilometer = mile*1.609;
    return kilometer;
}

// even or odd

function EvenOrOdd(number) {
    even = number % 2;
    if (even === 0) {
        // console.log( "this number is even number", number);
        return 'this is number is a even number';
    }else{
        return 'this is number is a odd number';
    }
}
let givenNumber = EvenOrOdd(445);
console.log(givenNumber);


// leep year 

function leepYear(year) {
    const thisYear = year % 4 ;
    if (thisYear === 0) {
        return 'this year is leep year';
    }
     return 'this year is not leep year';
}
var giveYear = 2024;
var result = leepYear(giveYear);
console.log( giveYear , result);


// sum of array  
function sumOfArray(numbers){
    let sum = 0 ;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = element + sum;
    }
    return sum;
}

var array = [20 , 10 , 40 , 55, 63 , 43, 71 ,30 , 20 , 40, 10 , 33 ];
var result = sumOfArray(array);
console.log ( 'sum of array',result);

// sum of odd array  
function sumOfOdd(data){
 const arrayMake = [];
 for (let i = 0; i < data.length; i++) {
     const element = data[i];
     if (element % 2 !== 0) {
        arrayMake.push(element)
     }
 }
 return arrayMake;

}

var array = [20 , 10 , 40 , 55, 63 , 43, 71 ,30 , 20 , 40, 10 , 33 ];
var result = sumOfOdd(array);
console.log ( 'sum of array',result);
var result2 = sumOfArray(result);
console.log('odd number sum ' , result2) 

// 1-7 addition 
function addition(numbers){
    var sum = 0;
    for (let i = 0; i <= numbers; i++) {
        sum = sum + i;
    }
    return sum;
}
var result = addition(8);
console.log(result);


// 1-7 multication / fatoreal

function fatoreal(numbers){
    var sum = 1;
    for (let i = 1; i <= numbers; i++) {
        sum = sum * i;
    }
    return sum;
}
var result = fatoreal(8);
console.log(result);



