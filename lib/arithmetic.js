'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function() {
  let result = 0;
  for(let i = 0; i < arguments.length-1; i++){
    if( typeof arguments[i] !== 'number' ) { return null; }
    result = arguments[i] + arguments[i+1];
  }
  return result;
};


arithmetic.subtract = function () {
  let result = 0;
  for(let i = 0; i < arguments.length-1; i++){
    if( typeof arguments[i] !== 'number' ) { return null; }
    result = arguments[i] - arguments[i+1];
  }
  return result;
};


arithmetic.multiply = function (arr) {
  let result = 0;
  for(let i = 0; i < arguments.length-1; i++){
    if( typeof arguments[i] !== 'number' ) { return null; }
    result = arguments[i] * arguments[i+1];
  }
  return result;
};


arithmetic.divide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' || b === 0){return null;}
  return a/b; 
};

