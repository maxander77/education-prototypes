import Zombie from '../Zombie';

test('Should be type Zombie', () => {
  const character = new Zombie('John', 'Zombie');
  expect(character.type).toBe('Zombie');
});

test('Zombie should have an attack of 40', () => {
  const character = new Zombie('Alice', 'Zombie'); 
  expect(character.attack).toBe(40);
});

test('Zombie should have a defence of 10', () => {
  const character = new Zombie('Alice', 'Zombie');
  expect(character.defence).toBe(10);
});

test('Zombie should lvl up correctly', () => {
  const character = new Zombie('Bob', 'Zombie');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(48); 
  expect(character.defence).toBe(12); 
  expect(character.health).toBe(100);
});

test('Zombie should take damage correctly', () => {
  const character = new Zombie('Lord', 'Zombie');
  character.damage(20);
  expect(character.health).toBe(80);
  character.damage(150);
  expect(character.health).toBe(0);
});