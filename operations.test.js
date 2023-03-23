// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line
const {subtract} = require('./operations')

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