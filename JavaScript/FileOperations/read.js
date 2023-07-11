var fs = require('fs'); 
fs.readFile('b.txt', 'utf8', function(err, data){
    console.log(data);
});
