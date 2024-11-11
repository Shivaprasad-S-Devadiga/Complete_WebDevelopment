const hobbies =["sports" ,"koph", 1, true];

for(let hobby of hobbies)
{
  console.log(hobby);
}

//Lot of methods are there, one of them is map
console.log(hobbies.map(hobby =>{
   return 'Hobby :' + hobby;
}));

console.log(hobbies)