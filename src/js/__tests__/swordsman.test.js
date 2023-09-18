import Swordsman from '../Swordsman';

test('Should be type Swordsman', () => {
  const character = new Swordsman('John', 'Swordsman');
  expect(character.type).toBe('Swordsman');
});

test('Swordsman should have an attack of 40', () => {
  const character = new Swordsman('Alice', 'Swordsman'); 
  expect(character.attack).toBe(40);
});

test('Swordsman should have a defence of 10', () => {
  const character = new Swordsman('Alice', 'Swordsman');
  expect(character.defence).toBe(10);
});

test('Swordsman should lvl up correctly', () => {
  const character = new Swordsman('Bob', 'Swordsman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(48); 
  expect(character.defence).toBe(12); 
  expect(character.health).toBe(100);
});

test('Swordsman should take damage correctly', () => {
  const character = new Swordsman('Lord', 'Swordsman');
  character.damage(20);
  expect(character.health).toBe(82);
  character.damage(150);
  expect(character.health).toBe(0);
});