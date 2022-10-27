const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Nick', 80, 'nick.le@gmail', 'nickle80');
    
    expect(engineer.github) .toEqual(expect.any(String));
});