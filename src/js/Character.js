class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('You are already dead');
    } 
    
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;

    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('You are already dead');
    } 

    const damageTaken = points * (1 - this.defence /100);

    this.health -= damageTaken;
    
    if (this.health <= 0) {
      this.health = 0;
    }
  }
}

export default Character;