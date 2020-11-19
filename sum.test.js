const { test, expect } = require('@jest/globals');
const sum = require('./sum');

test('Test adding two numbers',() => {
    expect(sum(4,5)).toBe(9);
});
