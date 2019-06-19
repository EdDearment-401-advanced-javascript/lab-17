'use strict';

const alter = require('../fileHandler/alter.js');

jest.mock('fs');

describe('toUpper', () => {
  it('should return an all caps string', () => {
    let string = 'this is a test';
    string = alter.toUpp(string);
    expect(string).toBe('THIS IS A TEST');
  });
});