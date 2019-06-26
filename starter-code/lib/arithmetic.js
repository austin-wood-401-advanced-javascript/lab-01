'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  for(let i = 0; i < arr.length; i++){
    let result = arr[i] + arr[i+1];
  }
  return result;
};


arithmetic.subtract = function (arr) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a-b;
};


arithmetic.multiply = function (arr) {
  if( typeof a !== "number" || typeof b !== "number" ){return null;}
  return a*b;
};


arithmetic.divide = function (a,b) {
  if( typeof a !== "number" || typeof b !== "number" ){return null;}
  return a%b; 
};

