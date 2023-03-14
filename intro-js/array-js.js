var number = ['zubi' , 'rashed' , 'nazu' , 'balam' , 50 , 45 , 60 , 88];
for (let i = 0; i < number.length; i++) {
     console.log(number[i]);
}


var a = number.length;
if( a > 5){
    for (let i = 0; i < 20; i++) {
        console.log(i , 'this is condition')
    }
}else{
    'hello world';
}

console.log( 'string', a)

console.log(number.length);
console.log(number.indexOf(88));

for(var i = 1; i < 20; i++){
    if(i > 10){
        break;
    }
    console.log('break' , i)
}

var numbers = [40 , 50 , 70, 9 , 0 , 80 , 40 , 22 , 10];

for (let i = 0; i < numbers.length; i++) {
    const data = numbers[i];
    console.log('index-of', i , data)
}

var includes = numbers.includes(40);
console.log(includes)

var slice =  numbers.slice( 3 , 7 );
console.log(slice);

var sub = " this is zubair bin ferdous , how want to be a developer";
var subS = sub.substring(3 , 18);
console.log(subS);
