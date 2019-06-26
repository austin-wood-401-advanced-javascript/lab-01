'use strict';

let greet = module.exports = {};

greet.greet = function(str) { 
  if(typeof str !== 'string'){ return null;}
  console.log(`hello ${str}`);
};
