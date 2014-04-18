var u32a = new Uint32Array(1)
u32a[0]=+process.argv[2]
var u16a = new Uint16Array(u32a.buffer)
console.log(JSON.stringify(u16a))
