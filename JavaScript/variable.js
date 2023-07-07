// var :- function  scoped
// let and const :- block scoped
function variables(){
    a=0;
   b=0;
    for(var i=0;i<10;i++){
        let b;
        var a;
        a++;
        b++;
    }
    console.log("a=",a);
    console.log("b=",++b);
}

variables()