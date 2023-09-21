
import { Account } from "./Account.js"
export class User {
  
  

  constructor(name,email){
    this.name = name
    this.email = email
    this.account = new Account(this)
    
  }
}
