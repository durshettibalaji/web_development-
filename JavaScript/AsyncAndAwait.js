const abc=async()=>{
    const url=await fetch("https://jsonplaceholder.typicode.com/todos")
    const json=await url.json()
    // url.then(abc=>abc.json()).then(abc=>console.log(abc[5]))
    // json.map()
    console.log(json)
    return url
};
abc()
