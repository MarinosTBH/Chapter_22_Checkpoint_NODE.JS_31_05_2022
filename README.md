NODE.JS CHECKPOINT GMC 31/05/22	

//LEARN YOU THE NODE.JS FOR MUCH WIN!

1-//HELLO WORLD (Exercise 1 of 13)

  //Create a file named hello-world.js.

  //Write a program that prints the text "HELLO WORLD" to the console(stdout).

////////////////////////////////////////////////

2-// BABY STEPS (Exercise 2 of 13)

  //Create a file named baby-steps.js.

  //Write a program that accepts one or more numbers as command-line arguments
  //and prints the sum of those numbers to the console (stdout).

//////////////////////////////////////////////// 

3-//MY FIRST I/O! (Exercise 3 of 13) 

	//Create a file named my-first-io.js.
	// Write a program that uses a single synchronous filesystem operation to
  //read a file and print the number of newlines (\n) it contains to the
  //console (stdout), similar to running cat file | wc -l.

  //The full path to the file to read will be provided as the first
  //command-line argument (i.e., process.argv[2]). You do not need to make
  //your own test file.
//////////////////////////////////////////////// 
4-// MY FIRST ASYNC I/O! (Exercise 4 of 13)

  //Create a file named my-first-async-io.js.

  //Write a program that uses a single asynchronous filesystem operation to
  //read a file and print the number of newlines it contains to the console
  //(stdout), similar to running cat file | wc -l.

  //The full path to the file to read will be provided as the first
  //command-line argument.

//////////////////////////////////////////////// 
-5 //## FILTERED LS (Exercise 5 of 13)

  Create a file named filtered-ls.js.

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument.

  For example, if you get 'txt' as the second argument then you will need to
  filter the list to only files that end with .txt. Note that the second
  argument will not come prefixed with a '.'.

  Keep in mind that the first arguments of your program are not the first
  values of the process.argv array, as the first two values are reserved for
  system info by Node.

  The list of files should be printed to the console, one file per line. You
  must use asynchronous I/O.

//////////////////////////////////////////////// 
6-## MAKE IT MODULAR (Exercise 6 of 13)

  Create two files named make-it-modular.js and mymodule.js.

  This problem is the same as the previous but introduces the concept of
  modules. You will need to create two files to solve this.

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the
  list of files (one file per line) to the console. You must use
  asynchronous I/O.

  You must write a module file (mymodule.js) to do most of the work. The
  module must export a single function that takes three arguments: the
  directory name, the filename extension string and your callback function,
  in that order. Don't alter the filename extension string in any way before
  passing it to your module.

  The callback function must be called using the idiomatic node(err, data)
  convention. This convention stipulates that unless there's an error, the
  first argument passed to the callback will be null, and the second will be
  your data. In this exercise, the data will be your filtered list of files,
  as an Array. If you receive an error, e.g. from your call to
  fs.readdir(), the callback must be called with the error as the first and
  only argument.

  You must not print directly to the console from your module file, only
  from your original program.

  In the case of an error bubbling up to your original program file, simply
  check for it and print an informative message to the console.

  These four things are the contract that your module must follow.

   1. Export a single function that takes exactly the arguments described.
   2. Call the callback exactly once with an error or some data as described.
   3. Don't change anything else, like global variables or stdout.
   4. Handle all the errors that may occur and pass them to the callback.

  The benefit of having a contract is that your module can be used by anyone
  who expects this contract. So your module could be used by anyone else who
  does learnyounode, or the verifier, and just work.

//////////////////////////////////////////////// 
7-## HTTP CLIENT (Exercise 7 of 13)

  Create a file named http-client.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).

//////////////////////////////////////////////// 

8- ## HTTP COLLECT (Exercise 8 of 13)

  Create a file named http-collect.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
//////////////////////////////////////////////// 

9-## JUGGLING ASYNC (Exercise 9 of 13)

  Create a file named juggling-async.js.

  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.

//////////////////////////////////////////////// 
10- ## TIME SERVER (Exercise 10 of 13)

  Create a file named time-server.js.

  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.


//////////////////////////////////////////////// 
11- ## HTTP FILE SERVER (Exercise 11 of 13)

  Create a file named http-file-server.js.

  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.

//////////////////////////////////////////////// 
12- ## HTTP UPPERCASERER (Exercise 12 of 13)

  Create a file named http-uppercaserer.js.

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.


//////////////////////////////////////////////// 
13- ## HTTP JSON API SERVER (Exercise 13 of 13)

  Create a file named http-json-api-server.js.

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.

