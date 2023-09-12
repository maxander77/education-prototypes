import Character from '../Character';

test('should have at least 2 characters in name', () => {
  const name = 'Bo';
  const character = new Character(name);
  expect(() => character).toThrowError('Name should have at least 2 charactres');
});

test('should have at most 10 characters in name', () => {
  const name = 'ThisIsTooLong';
  const character = new Character(name);
  expect(() => character).toThrowError('Name should have at most 10 charactres');
});

