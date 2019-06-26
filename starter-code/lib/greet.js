'use strict';

let greet = module.exports = {};

greet.greeting = function(str) { 
  console.log('Hello, ', str, '!');
};
