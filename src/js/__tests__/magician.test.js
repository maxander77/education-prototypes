import Magician from '../Magician';

test('Should be type Magician', () => {
  const character = new Magician('John', 'Magician');
  expect(character.type).toBe('Magician');
});

test('Magician should have an attack of 10', () => {
  const character = new Magician('Alice', 'Magician'); 
  expect(character.attack).toBe(10);
});

test('Magician should have a defence of 40', () => {
  const character = new Magician('Alice', 'Magician');
  expect(character.defence).toBe(40);
});

test('Magician should lvl up correctly', () => {
  const character = new Magician('Bob', 'Magician');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(12); 
  expect(character.defence).toBe(48); 
  expect(character.health).toBe(100);
});

test('Magician should take damage correctly', () => {
  const character = new Magician('Lord', 'Magician');
  character.damage(20);
  expect(character.health).toBe(80);
  character.damage(150);
  expect(character.health).toBe(0);
});