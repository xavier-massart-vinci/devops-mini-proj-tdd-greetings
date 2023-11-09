const greet = require('../src/app');

test('giving bob shoud be Hello, bob.', () => {
  expect(greet('bob')).toBe('Hello, bob.');
});
