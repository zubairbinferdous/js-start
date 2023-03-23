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

var unit = price(  10, 10 , 10 );
var resultPrice = unit;
console.log( 'total price of this ' ,  resultPrice);

// find the big phone and small phone 

const phone = [
    {phone: 'samsum' , camara:33, storage: '32gb', price:90000, color:'red' },
    {phone: 'nokia' , camara:33, storage: '32gb',  price:22000, color:'red' },
    {phone: 'xaomi' , camara:33, storage: '32gb',  price:55000, color:'red' },
    {phone: 'hello' , camara:33, storage: '32gb',  price:150000, color:'red' }
];

function chepPhone(phones){
    let myPhonePrice = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if( phone.price > myPhonePrice.price ){
            myPhonePrice = phone;
        }
    }

    return myPhonePrice;
}
const myPhone = chepPhone(phone);
console.log('this is the big phone' ,  myPhone);


function cheop(phones) {
    let cheapPhone = phones[0];
    for(let i = 0; i < phones.length; i++ ){
        let element = phones[i];
        if (element.price < cheapPhone.price) {
            cheapPhone = element;
        }
    }
    return cheapPhone;
}

var result = cheop(phone);
console.log('this is the small phone' ,result);


// add price from object

const shopingCart = [
    {name:'shoe' , price: 1400, unit:1},
    {name:'pent' , price: 4300, unit:3},
    {name:'milk' , price: 2100, unit:5},
    {name:'shirt' , price: 6200, unit:2},
]


function totalCost(product) {
    let myPrice = 0;
     for (let i = 0; i < product.length; i++) {
         const element = product[i];
         const elementTotal = element.price * element.unit;
         myPrice = myPrice + elementTotal;
     }
     return myPrice;
}
const product2 = totalCost(shopingCart);
console.log( 'my total price total' , product2);


//    if u purchase more ticket
//    -> 100 ----> 100
//    -> 101- 200 ->> 90tk 
//    -> 200+ --> 70tk 

function price(ticket) {
    const first100Ticket = 100;
    const secound100Ticket = 90;
    const restTicket   = 70 ;

    if ( ticket <= 100 ) {
        const price = ticket * first100Ticket;
        return price;
    }else if(ticket <= 200){
        const first100 = first100Ticket * 100;
        const findticketUnit = ticket - 100;
        const secound100 = findticketUnit * secound100Ticket;
        const price2 = first100 + secound100;
        return price2;
    }else{
        const first100 = first100Ticket * 100;
        const secou100 = secound100Ticket * 100;
        const findTicket = ticket - 200;
        const third100 = findTicket * restTicket;
        const price3 = first100 + secou100 + third100;
        return price3
    }
}
let ticket = 120;
let resultPrice2 = price(ticket);
console.log('ticke price' , resultPrice2);

// validation.js

function addSum( num , num1) {
    if (typeof num !== 'number' || typeof num1 !== 'number') {
        return 'please enter your number';
    }
    return num + num1;
}

var addSum = addSum( 22 , 20);
console.log(addSum);
