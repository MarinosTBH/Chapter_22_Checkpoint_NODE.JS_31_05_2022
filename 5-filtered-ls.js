var fs = require('fs');
var path = require('path');

directory = process.argv[2]
ext = '.' + process.argv[3]

fs.readdir(directory, function callback(err, list){
	if (err) console.error(err)
	list.forEach(function(el){
		if (path.extname(el) == ext){
			console.log(el)
		}
	})
})