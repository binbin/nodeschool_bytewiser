var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

// console.log(buffer.slice(0, 3))

// console.log(new Buffer('\n'))

var start=0
for(var i=0;i<buffer.length;i++){
   if(buffer[i]===0x0a){
   	console.log(buffer.slice(start,i))
   	start=++i
   }
}

console.log(buffer.slice(start,buffer.length))