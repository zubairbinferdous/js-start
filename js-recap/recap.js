// 1. variable 
var myName = 'khan';
var age = 30 ;

// math operation : + , - , * , /
// shortHand : ++ , -- , *= , =/ ,+= ,-=

// 2. array 
var friends = ['hello' , 'babul' , 'mamu' , 'chabu'];
var friendsName = friends[2];
friends[2] = 'sadab ali';

//3. consdition 
// > , < , >= <== , == , === , !=, !==
if(friends.length > 3){
    console.log('hello world');
}else{
    console.log('hello world but not fine');
}


// 4 loop
var number = 0 ; 
while(friends.length < number){
    console.log('hello world');
    number++
}

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
}


// 5. function 

function isMoon(){
    console.log('hello world');
}
isMoon();

function isSum(){
   var x = 10;
   var y = 20;
   var r = x + y;
   return r;
}
var result = isSum();
console.log(result);


// object 

var phone = {
    brand: 'iphone',
    price: 30000 ,
}

phone.brand;
phone.price = 120000;


// var , let , const 

let ages = 70
ages = 60;

const countryName = 'bangladesh';
console.log(ages, countryName);