const Main = require('../src/app');

//Arrange

const main = new Main();

test('giving bob shoud be Hello, bob.', () => {

  //Act
  let resultat = main.greet('bob')

  //Assert
  expect(resultat).toBe('Hello, bob.');
  
});
