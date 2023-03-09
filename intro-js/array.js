var friend = [ 40 ,'sadman' , 'emon' , 'ridoy' , 'mim' , 60 , 90 , "habibai"];
console.log(friend[0]);
friend[0] = 160;
console.log(friend.length);
console.log(friend.indexOf("mim"));
console.log(friend.indexOf(130));
console.log(friend)

for (let index = 0; index < friend.length; index++) {
    const name = friend[index];
    console.log(name);
}

