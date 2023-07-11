// url="https://jsonplaceholder.typicode.com/todos"
// const user= fetch(url);
// console.log(user);
// user.then(abc=>abc.json()).then(abc=>console.log(abc[5]))
//  console.log(user)
const abc=()=>{
  console.log("2 good")
}
const bcd=()=>{
console.log("2 bad")
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(10==10)
      reject("failed");
      resolve("balaji");
      
    }, 300);
  });
  
  myPromise
    .then(new Promise((res,rej)=>{res("good");rej("bad")}).then((abc)=>console.log(abc),bcd),bcd)
    .then(abc,bcd)
    .catch((error)=>console.log(error))
    // .then(handleFulfilledC, handleRejectedC);
  