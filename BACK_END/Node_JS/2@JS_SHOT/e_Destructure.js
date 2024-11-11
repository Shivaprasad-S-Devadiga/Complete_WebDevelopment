const person ={
  name:"max",
  age:22,
  greet(){
    console.log("Hi i am "+ this.name +" i am "+ this.age +" year old.");
  }
};

//Destructuring
const print =({name, age})=>{
  console.log(name);
  console.log(age);
}

print(person)

const hobbies =["sports" ,"koph", 1, true];
const [h1, h2] = hobbies;
console.log(h1,h2)