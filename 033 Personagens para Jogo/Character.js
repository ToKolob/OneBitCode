export class Character {
  constructor(name,health,atack,defense){
    this.name = name,
    this.health = health,
    this.atack = atack,
    this.defense = defense
  }
  show(){
    console.log(this);
  }
  inflictAtack(target){
    const damage = Number(this.atack) - Number(target.defense)
    target.health -= damage
    console.log(`${this.name} land ${damage} of damage on ${target.name}`);

    console.log(target);

    if (target.health < 0){console.log(target.name + " faleceu!");}
  }
}


