'use strict';


// const http = require('http');

// const pol = require('./index.js');

// const lifeTest = ( req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.statusCode = 200;
//   //res.write()
//   res.write('Hello World');
//   res.end();
// };

// const app = http.createServer(requestHandler);
// app.listen(process.env.PORT, () => console.log('App Up On Port', process.env.PORT));


const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet.greeting('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2 
