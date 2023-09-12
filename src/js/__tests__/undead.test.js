import Undead from '../Undead';

test('Should be type Undead', () => {
  const character = new Undead('John', 'Undead');
  expect(character.type).toBe('Undead');
});

test('Undead should have an attack of 25', () => {
  const character = new Undead('Alice', 'Undead'); 
  expect(character.attack).toBe(25);
});

test('Undead should have a defence of 25', () => {
  const character = new Undead('Alice', 'Undead');
  expect(character.defence).toBe(25);
});

test('Undead should lvl up correctly', () => {
  const character = new Undead('Bob', 'Undead');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30); 
  expect(character.defence).toBe(30); 
  expect(character.health).toBe(100);
});

test('Undead should take damage correctly', () => {
  const character = new Undead('Lord', 'Undead');
  character.damage(20);
  expect(character.health).toBe(80);
  character.damage(150);
  expect(character.health).toBe(0);
});