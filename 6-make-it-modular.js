var mymodule = require('./6-mymodule.js') // mymodule is now the module use to readdirectory and filter the task
var dir = process.argv[2]
var filterStr = process.argv[3]

// here it is my module instead of readdir()
mymodule(dir, filterStr, function (err, list) {
	if(err)
	return console.error('There was an error: ', err)
	
	list.forEach(function (file) {
		console.log(file)
	})
})


/*Module Contract

One important takeaway from this lesson apart from modularizing our code the node.js way, is the concept of a module contract.  In this case, our module contract is to export a single function that takes a directory, filter string, and callback as arguments.  The callback must be called once, with an error or data.  We are not modifying any global variables, and we are handling all errors by passing them to our callback to print an error message if an error occurs.

This concept is important moving forward because modules created and published to npm (node.js package manager) should behave as intended for anyone expecting that the module will produce the results of the module contract.  Building with modules is what node.js all about.*/