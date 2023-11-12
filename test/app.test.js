const Main = require('../src/app');

//Arrange 
const main = new Main; 

test('giving bob shoud be Hello, bob.', () => {

    //Act
    const result = main.greet('bob');

    //Assert 
    expect(result).toBe('Hello, bob.');

});

test('giving null shoud be Hello, my friend.', () => {

    //Act
    const result = main.greet(null);

    //Assert 
    expect(result).toBe('Hello, my friend.');

});

test('giving undefined shoud be Hello, my friend.', () => {

    //Act
    const result = main.greet(undefined);

    //Assert 
    expect(result).toBe('Hello, my friend.');

});

test('giving an empty string shoud be Hello, my friend.', () => {

    //Act
    const result = main.greet("   ");

    //Assert 
    expect(result).toBe('Hello, my friend.');

});

test('giving bob in capital letters shoud be HELLO, BOB!', () => {

    //Act
    const result = main.greet("BOB");

    //Assert 
    expect(result).toBe('HELLO, BOB!');

});


test('giving Kratos, Thanathos shoud be Hello Kratos and Thanathos.', () => {
    //Act
    const result = main.greet(['Kratos', 'Thanathos'])
    
    //Assert
    expect(result).toBe('Hello, Kratos and Thanathos.');
});

test('giving Kratos, Thanathos, Hypnos  shoud be Hello Kratos, Thanathos and Hypnos.', () => {
    //Act
    const result = main.greet(['Kratos', 'Thanathos', 'Hypnos'])
    
    //Assert
    expect(result).toBe('Hello, Kratos, Thanathos and Hypnos.');
});

test('giving 4 names shoud be Hello, Kratos, Thanathos, Hypnos and Lucas.', () => {
    //Act
    const result = main.greet(['Kratos', 'Thanathos', 'Hypnos', 'Lucas'])
    
    //Assert
    expect(result).toBe('Hello, Kratos, Thanathos, Hypnos and Lucas.');
});

test('giving 5 names shoud be Hello, Kratos, Thanathos, Hypnos, Lucas and Ludovic.', () => {
    //Act
    const result = main.greet(['Kratos', 'Thanathos', 'Hypnos', 'Lucas', 'Ludovic'])
    
    //Assert
    expect(result).toBe('Hello, Kratos, Thanathos, Hypnos, Lucas and Ludovic.');
});

test('giving 2 normal names and 1 name in uppercase should be Hello, Thanathos and Hypnos. AND HELLO KRATOS!', () => {
  //Act
  const result = main.greet(['Thanathos', 'Hypnos', 'KRATOS']);

  //Assert
  expect(result).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!');
});


