const http = require('http')


http.get(process.argv[2], function (response) {
	response.setEncoding('utf8')
	response.on('data', console.log) //with respone.on we only listen to the first data event we received
	response.on('error', console.error)
}).on('error', console.error)