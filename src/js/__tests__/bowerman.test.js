import Bowerman from '../Bowerman';

test('Should be type Bowerman', () => {
  const character = new Bowerman('John', 'Bowerman');
  expect(character.type).toBe('Bowerman');
});

test('Bowerman should have an attack of 25', () => {
  const character = new Bowerman('Alice', 'Bowerman'); 
  expect(character.attack).toBe(25);
});

test('Bowerman should have a defence of 25', () => {
  const character = new Bowerman('Alice', 'Bowerman');
  expect(character.defence).toBe(25);
});

test('Bowerman should lvl up correctly', () => {
  const character = new Bowerman('Bob', 'Bowerman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30); 
  expect(character.defence).toBe(30); 
  expect(character.health).toBe(100);
});

test('Bowerman should take damage correctly', () => {
  const character = new Bowerman('Lord', 'Bowerman');
  character.damage(20);
  expect(character.health).toBe(80);
  character.damage(150);
  expect(character.health).toBe(0);
});