

function fun1(){
    return new Promise((resolve)=>{
        setTimeout(resolve,5000)
    })
}

fun1().then(()=>console.log("funtion called"))