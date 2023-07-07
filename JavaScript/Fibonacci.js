const fibonacci=(n)=>{
let a=1,b=1,c=a+b
let series=[a,b]
for(var i=1;i<n;i++)
{
c=a+b;
a=b;
b=c;
series.push(c);
}
return series;
}



console.log(fibonacci(10))