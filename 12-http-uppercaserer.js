const http = require('http')
const map = require('through2-map')

var server = http.createServer(function (req,res){
	if (req.method === 'POST') { 	

		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase()
		})).pipe(res)
	}else {
	return res.end('Please send a POST\n')}
})


server.listen(Number(process.argv[2]))

