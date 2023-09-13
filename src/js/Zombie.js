import Character from './Character';

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}

export default Zombie;