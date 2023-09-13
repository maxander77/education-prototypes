import Character from '../Character';

test('should have at least 2 characters in name', () => {
  const name = 'Bo';
  const character = new Character(name);
  expect(name.length).toBeGreaterThanOrEqual(2);
});

test('should have at most 10 characters in name', () => {
  const name = 'ThisIs';
  const character = new Character(name);
   expect(name.length).toBeLessThanOrEqual(10);
});

