var iphonePrice = 80000;
var myBudget = 100000;
var salary  = 4000000; 
var car = 1;

if (iphonePrice < myBudget && salary > 60000 && car >= 1){
    console.log('buy iphone');
}else{
    console.log('come back')
}


if (iphonePrice || myBudget && salary > 60000 && car >= 1){
    console.log('buy iphone another');
}else{
    console.log('come back')
}

var price4 = 300;
var price5 = 400;
var price6 = 600;

if((price4 > price5 && myBudget > iphonePrice) || price6 < myBudget){
    console.log('hello world other conditions');
}

if(price4 > price5){
    console.log("hello world")
}else if (price6 > price4) {
    console.log('hello thing my secound world')
}else if(price6 > price5){
    console.log('hello world to me')
}
else {
    console.log('happy to you have this thing ')
}
