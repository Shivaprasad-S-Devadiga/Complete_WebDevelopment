const hobbies =["kho", "cricket", "football", "cooking"];
console.log(hobbies);

const copyA = hobbies;
console.log(copyA)

const copyB = [hobbies];
console.log(copyB)

//Spred
const copyC = [...hobbies];
console.log(copyC)

//rest
const toArray = (...args)=>{
   return args
}

console.log(toArray(1,3,5,7));
