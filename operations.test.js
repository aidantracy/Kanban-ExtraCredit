// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line
const {subtract} = require('./operations')

const {divide} = require('./operations')

// Sum Test Cases
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});

// Subtract Test Cases

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1)
});

test('subtracts 4 - 2 to equal 2', () => {
    expect(subtract(4, 2)).toBe(2)
});

test('subtracts -1 - (-7) to equal 6', () => {
    expect(subtract(-1, -7)).toBe(6)
});

// Division Test Cases

test('divides 2 by 1 to equal 2', () => {
    expect(divide(2,1)).toBe(2)
});

test('divides 2 by 0 to be invalid', () => {
    expect(divide(2, 0)).toBe(NaN)
});

test('divides -7 by -1 to equal 7', () => {
    expect(divide(-7,-1)).toBe(7)
});