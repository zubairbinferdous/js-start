var numbers = [44,45,55,65,76,30,22,77,82,66];
for(var i = 0; i < numbers.length ; i++){
    var number = numbers[i]
    if(number > 50){
        continue;
    }
    console.log(number);
}
