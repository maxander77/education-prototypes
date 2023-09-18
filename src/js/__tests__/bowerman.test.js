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
  expect(character.health).toBe(85);
  character.damage(150);
  expect(character.health).toBe(0);
});


test('test damage', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'bowman', type: 'Bowerman',
  };
  expect(bowerman).toEqual(result);
});

test('test damage health is 0', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(150);
  const result = {
    attack: 25, defence: 25, health: 0, level: 1, name: 'bowman', type: 'Bowerman',
  };
  expect(bowerman).toEqual(result);
});