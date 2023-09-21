import { Deposit } from "./Deposit.js"
import { Loan } from "./Loan.js"
import { Transfer } from "./Transfer.js"
import { User } from "./User.js"

export class Account {
  #balance = 0
  #deposits
  #loans
  #transferTo
  #user

  constructor(user){
    this.#user = user
    this.#balance = 0
    this.#deposits = []
    this.#loans = []
    this.#transferTo = []
  }

  makeDeposit(value){
    this.#deposits.push(new Deposit(value,new Date()))
    this.#balance += value

    console.log('Depósito feito de '+value+' reais');
  }

  makeLoan(value,numOfInstallments){
    this.#loans.push(new Loan(value,new Date(),numOfInstallments))
    this.#balance += value

    console.log('Emprestimo feito de '+value+' reais');
  }

  get balance(){
    console.log('O saldo da conta é ' + this.#balance);
    return this.#balance
  }

  makeTransfer(to,value){

    if (value > this.#balance){
      console.log('saldo indisponível para transferência');
    } else{

      this.#transferTo.push(new Transfer(this.#user,to,value,new Date()))
      this.#balance -= value

      to.account.#balance += value

      console.log('Transferencia feita para '+to.name+ ' de '+value+' reais');
    }
    

  }
}


