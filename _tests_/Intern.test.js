const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Nick', 80, 'nick.le@gmail', 'UCR');
    
    expect(intern.school) .toEqual(expect.any(String));
});