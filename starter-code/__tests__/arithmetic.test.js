'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Addition Function', () => {

  it('adds numbers', () => {
    expect(arithmetic.add(1,2)).toBeGreaterThan(0)
  });

});