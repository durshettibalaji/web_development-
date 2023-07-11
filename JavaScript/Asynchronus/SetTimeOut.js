const printToScreen=()=>{
    console.log("Hello World");
    setTimeout(()=>console.log("second"),2000)
}
setTimeout(printToScreen,1000)