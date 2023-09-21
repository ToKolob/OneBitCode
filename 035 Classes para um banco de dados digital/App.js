
import { Loan } from "./entities/Loan.js";
import { User } from "./entities/User.js";

 export class App {

  static users = []
  static newUser(email,name){

    const userExists = App.findUser(email)

    if (userExists){
      console.log('Esse email já está sendo usado');
    } else{

      const newUser = new User(name,email)
      
      this.users.push(newUser)

      console.log(newUser);
      console.log('usuario cadastrado');

    }
  }

  static findUser(email){
    const user = this.users.find(user=>user.email === email)
    return user ?? null
  }

  static deposit(email, value){
    const user = App.findUser(email)

    if (user){      
      user.account.makeDeposit(value)
    }
  }

  static transfer (emailFrom,emailTo,value){
    const userFrom = App.findUser(emailFrom)
    const userTo = App.findUser(emailTo)


    if (userFrom && userTo){      
      userFrom.account.makeTransfer(userTo,value)
      
    }
  }
  static loan (email,value,numOfInstallments){
    const user = App.findUser(email)

    if (user){      
      user.account.makeLoan(value,numOfInstallments)
    }
  }
  static changeTaxRate(newTax){
    Loan.setTaxRate = newTax/100
  }

}



