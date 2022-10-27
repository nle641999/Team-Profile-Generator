const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Nick', 80, 'nick.le@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});