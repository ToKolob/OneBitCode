import { Character } from "./Character.js";
import { Thief } from "./Thief.js";
import { Mage } from "./Mage.js";
import { Worrior } from "./Worrior.js";


const riu = new Character('Riu',10,5,3)
const vega = new Worrior ('Vega', 10, 5, 3,3)
const chunLee = new Thief('Chun Lee',8,8,2)
const eleven = new Mage("Eleven",8,3,3,8)

riu.inflictAtack(vega)

chunLee.inflictAtack(riu)

eleven.inflictAtack(chunLee,7)

eleven.heal(eleven,2)

vega.toglePosition()

vega.toglePosition()

vega.toglePosition()

chunLee.inflictAtack(vega)

vega.inflictAtack(chunLee)

vega.toglePosition()

vega.inflictAtack(eleven)

