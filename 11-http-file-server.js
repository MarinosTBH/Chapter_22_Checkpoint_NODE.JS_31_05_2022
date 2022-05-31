const http = require('http') 
const fs = require('fs') 

var port = process.argv[2]
var file = process.argv[3]

http.createServer(function (req, res) {	

							//The fs.readFile() method will read the entire file into memory before sending it to the response, while the fs.createReadStream() method will stream the file contents to the response as it is read.  This may be faster in some cases, and use less memory.
	
	fs.createReadStream(file).pipe(res)  		//pipe the data from the src stream to the dst stream. In this way you can connect a filesystem stream with an HTTP response stream.
}).listen(+port, function() {
	console.log('Server listening on http://localhost:%s', port)
})