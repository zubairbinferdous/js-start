// var mobile = {
//     brand: 'Samsung',
//     price: '18000' ,
//     storage: '64gb' ,
//     camera: '15mp'
// }

// mobile.price = 30000;
// if(mobile.price >= 45000){
//     console.log('hello object')
// }else{
//     console.log('hello object not')
// }

// mobile.strong = "100GB"
// console.log(mobile)

// console.log(mobile.brand)

// var wayToFindObject = mobile['storage'];

// var object = Object.keys(mobile);
// var objectValue = Object.values(mobile);
// console.log(objectValue);
// console.log(object);
// console.log(wayToFindObject);

// var propartyCamara = 'camera';
// mobile[propartyCamara] = '220MP'
// var propartyCamaraObject = mobile[propartyCamara];
// console.log(propartyCamaraObject);


var mobile = {
    brand: 'Samsung',
    price: '18000' ,
    storage: '64gb' ,
    camera: '15mp',
    shop: 'helloShop',
    name: 'zubiar'
}

var keys = Object.keys(mobile);
// var value = Object.values(mobile);
// console.log(keys);


for(var i = 0 ; i < keys.length ; i++){
    var propertyName = keys[i];
    var propartyValue = mobile[propertyName];
    console.log(propertyName , propartyValue);
}