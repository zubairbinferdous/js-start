
//this is paramiter 
function foodPrice(money , phone) {
    var result = money + phone;
    console.log( 'totla price', result);
}
foodPrice(30 , 40); 
// this is argument 


function food(money , phone) {
    var result = money + phone;
    return result;
}
console.log(food(20 , 70));


function foodKinbo(taka){
    console.log('amr tak ashe' , taka );
}
var takaDelam = 400;
foodKinbo(takaDelam);


function book(price , unit){
    var result = price * unit;
    return result
}
var priceBook = book(100 , 5);
console.log('amr book price', priceBook);


function birani(money) {
    var biraniPrice = 220;
    var koyte = money / biraniPrice;
    return koyte;
    return 'hobe na';
    return "ses hoye gase"
}
var myMoney = birani(500);
console.log(myMoney);


function getAverage(assignment1 , assignment2 , assignment3, subject){
    var totla = assignment1 + assignment2 +assignment3;
    var avarage = totla / subject;
    return avarage;
}
var assignment1 = 60;
var assignment2 = 40;
var assignment3 = 90;
var subject = 3;

var myAvarage = getAverage(assignment1, assignment2,assignment3,subject);
console.log(parseInt(myAvarage));

function add( one , two) {
    var sum = one + two;
    return sum ;
}
var result1 = add(50 , 100);
// console.log(result1);
var result2 = add(100 , 200)
// console.log(result2);
var result = add( result1 , result2);
console.log(result);
