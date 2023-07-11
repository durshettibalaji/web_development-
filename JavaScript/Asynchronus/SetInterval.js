let a=1
const callBack=()=>{
    console.clear()
    console.log(a++)
}
setInterval(callBack, 1000);
for(let i=0;i<1000;i++)
{
    a++;
}