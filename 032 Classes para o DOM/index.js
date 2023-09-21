import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./form.js";

const h1 = new Component("h1","body",{textContent: "titulo"})
h1.build().render()



const input = new Input ('body',{
  type: 'text',
  id: 'nome',
  name: 'nome',
  placeHolder: 'seu nome'

})

input.build().render()

const form = new Form ('body')
form.render()


const label = new Label('seu nome: ',form, {htmlFor: 'nome', textContent: 'nome:'})
label.render()

form.addChildren(
  input,
  new Component ('br'),
  new Component('br'),
  new Label ('tantofaz',form,{textContent:'Data: ', htmlFor: "birthday"}),
  new Input (form, {id: "birthday", type: 'date'})
  )