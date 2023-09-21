import { Character } from "./Character.js";


export class Mage extends Character {
  constructor(name,health,atack,defense,mana){
    super(name,health,atack,defense)
    this.mana=mana
  }
  inflictAtack (target,addMana){
    if (addMana > this.mana || addMana < 0){
      addMana = this.mana
    }
    this.mana -= addMana


    const damage = this.atack + addMana - target.defense
    target.health -= damage
    console.log(`${this.name}, is a mage and land ${damage} of magic damage on ${target.name}`);
    console.log(target);

    if (target.health <= 0){console.log(target.name + " faleceu!");}
  }
  heal(target,addMana){
    if (addMana > this.mana || addMana < 0){
      addMana = this.mana
    }
    target.health += addMana*2
    console.log(this.name + ' curou ' + addMana*2 + ' pontos de vida');

    this.mana -= addMana

    console.log(target);
  }
}
