import { Character } from "./Character.js";


export class Thief extends Character {
  inflictAtack(target){
    const damage = 2*(this.atack - target.defense)
    target.health -= damage
    console.log(`${this.name}, is a kind of Rogue and land ${damage} of damage on ${target.name}`);
    console.log(target);

    if (target.health <= 0){console.log(target.name + " faleceu!");}
  }
}


