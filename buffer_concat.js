var array=[]

process.stdin.on('data',function(buffer){
   array.push(buffer)

})
process.stdin.on('end',function(){
	console.log(Buffer.concat(array))
})