

const fetchData = callback =>{
  setTimeout(()=>{
    callback('Done!');
  }, 1500);
  //console.log('Done after')
}

setTimeout(()=>{
  console.log('timer is done');
  fetchData(text=>{
    console.log(text)
  });
  //console.log('timer is done after')
}, 2000);

console.log("hi");
console.log("shiv");