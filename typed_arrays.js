process.stdin.once('data',function(buffer){
	var uint8array=new Uint8Array(buffer)
	console.log(JSON.stringify(uint8array))
})