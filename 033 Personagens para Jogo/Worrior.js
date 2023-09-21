import { Character } from "./Character.js";

export class Worrior extends Character {
  constructor(name,health,atack,defense,shild){
    super(name,health,atack,defense)
    this.shild = shild
    this.defensePosition = false
  }
  inflictAtack(target){
    if (!this.defensePosition){
      const damage = Number(this.atack) - Number(target.defense)
      target.health -= damage
      console.log(`${this.name} land ${damage} of damage on ${target.name}`);

      console.log(target);

      if (target.health < 0){console.log(target.name + " faleceu!");}
    } else {
      console.log(this.name + ' não está em posição de atack');
    }

    
  }
  toglePosition(){
    if (this.defensePosition === false) {
      this.defensePosition = true
      console.log(this.name + ' assumiu posição de defesa!');
      this.defense += this.shild
    }
    else {
      this.defensePosition = false
      console.log(this.name + ' assumiu posição de atack!');
      this.defense -= this.shild
    }
    console.log(this)



  }
}

