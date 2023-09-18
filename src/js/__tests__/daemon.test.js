import Daemon from '../Daemon';

test('Should be type Daemon', () => {
  const character = new Daemon('John', 'Daemon');
  expect(character.type).toBe('Daemon');
});

test('Daemon should have an attack of 10', () => {
  const character = new Daemon('Alice', 'Daemon'); 
  expect(character.attack).toBe(10);
});

test('Daemon should have a defence of 40', () => {
  const character = new Daemon('Alice', 'Daemon');
  expect(character.defence).toBe(40);
});

test('Daemon should lvl up correctly', () => {
  const character = new Daemon('Bob', 'Daemon');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(12); 
  expect(character.defence).toBe(48); 
  expect(character.health).toBe(100);
});

test('Daemon should take damage correctly', () => {
  const character = new Daemon('Lord', 'Daemon');
  character.damage(20);
  expect(character.health).toBe(88);
  character.damage(150);
  expect(character.health).toBe(0);
});