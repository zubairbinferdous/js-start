let country = 'bangladesh';
let age = 30 ;
let indepandent = true;
let student = {name: 'zubair', age: 40 , class: 'eight'};
let friends = ['hello', 'mim' , 'juntu' , 'pakhi' , 'bala'];
function add(){
    number = a + b ;
    return number;
}

if(friends.indexOf('zubair') !== -1){
    console.log('he is in array');
}else{
    console.log('he is not in array');
}

// concat 

const newFriendAge = [12 ,33, 41,55 ];
const newArray = friends.concat(newFriendAge);

console.log(typeof country);
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(indepandent));
console.log(typeof(student));
console.log(Array.isArray(friends));
console.log(typeof add);
console.log(friends.includes('mim'));
console.log(newArray);


// slice and splice

const friendName = [33,34,12,23,34,22,15,17,80,45];
var part = friendName.slice(3 , 7);
var splice = friendName.splice( 2 , 3 , 99 , 555 , 777);
console.log(part);
console.log(splice);
console.log(friendName);


// remove the same value

const  biraniName = ['zubair' , 'mim' , 'zubair' , 'rana' ,'zubi' , 'mim' , 'pakhi', 'rana' ,'pakhi'];
// const nname = biraniName.indexOf('ranae');

function removeName(data) {
    let newlist = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (newlist.includes(element) === false) {
            newlist.push(element);
        }
    }
    return newlist;
}
let result1 = removeName(biraniName);
console.log(result1);
// console.log(nname)


// output 1-50 
// if /3 is call foo
// if /5 is call bar 
// if /3&5 is call foobar

function fooBar(data) {
    for (let i = 1; i <= data; i++) {
         var number = i;
         if ( number % 3 === 0 && number % 5 === 0) {
            console.log('FooBer' , i);
         }else if(number % 5 === 0){
            console.log('ber' , i);
         }else if(number % 3 === 0 ){
            console.log('foo' , i );
         }
         else{
             console.log(number);
         }

    }
}
var giveData = 50;
var result = fooBar(giveData);


// 5 kj chal, 7 potato , 10 litter milk , price koto  

function price( rice , potato , milk ) {
    const ricePrice = 150;
    const potaotoPrice = 50;
    const milkPrice = 100;

    const totalRicePrice = ricePrice * rice;
    const totalPotatoPrice = potaotoPrice * potato;
    const totalMilkPrice = milkPrice * milk;

    const pricetotal = totalMilkPrice + totalPotatoPrice +totalRicePrice;
    return pricetotal;

}

var unit = price(  5 , 7 , 5 );
var resultPrice = unit;
console.log( 'total price of this ' ,  resultPrice);


