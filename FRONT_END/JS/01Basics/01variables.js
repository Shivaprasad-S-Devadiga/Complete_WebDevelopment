const accountId = 238344;
//accountId=2 // cant change

mynaame ="shiva" //works without datatypes

function scopeExample() {
  if (true) {
      var varVariable = "I'm declared with var";
      let letVariable = "I'm declared with let";
  }
  console.log(varVariable); // Accessible: "I'm declared with var" // but only after 1 scope ,not more that
  // console.log(letVariable); // Error: letVariable is not defined
  console.table([accountId, varVariable , mynaame]);
}
scopeExample();





