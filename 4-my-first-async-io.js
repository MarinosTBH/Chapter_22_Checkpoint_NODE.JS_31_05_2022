var fs = require('fs') // require is a special function provided by node 
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
	var nbLines = contents.toString().split('\n').length -1
	console.log(nbLines) 
})




