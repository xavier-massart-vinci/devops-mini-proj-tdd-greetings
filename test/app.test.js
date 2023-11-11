const Main = require('../src/app');

//Arrange 
let main = new Main; 

test('giving bob shoud be Hello, bob.', () => {

    //Act
    let resultat = main.greet('bob');

    //Assert 
    expect(resultat).toBe('Hello, bob.');

});

test('giving null shoud be Hello, my friend.', () => {

    //Act
    let resultat = main.greet(null);

    //Assert 
    expect(resultat).toBe('Hello, my friend.');

});

test('giving undefined shoud be Hello, my friend.', () => {

    //Act
    let resultat = main.greet(undefined);

    //Assert 
    expect(resultat).toBe('Hello, my friend.');

});


