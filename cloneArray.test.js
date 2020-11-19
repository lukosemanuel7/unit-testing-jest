const { test } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('Test is array is cloned',() => {
    const array = [1, 2, 3, 4]
    expect(cloneArray(array)).toEqual(array);
});