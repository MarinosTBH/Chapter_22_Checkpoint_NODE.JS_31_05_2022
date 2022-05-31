

console.log(process.argv.filter(a=>parseInt(a)).reduce((a,b)=>parseInt(a)+parseInt(b))); 
