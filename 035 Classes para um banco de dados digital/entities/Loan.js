import { Installment } from "./Installment.js";

export class Loan { 
  static #taxRate = 0.02
  static get getTaxRate() { return Loan.#taxRate}
  static set setTaxRate(newRate){ Loan.#taxRate = newRate}

  constructor(value,createAt,numOfInstallments){
    this.value =value
    this.createAt = createAt
    this.Installments = this.calculateInstallments(numOfInstallments)    
  }

  calculateInstallments(numOfInstallments){
    
    const monthlyPayment = (
      (this.value * (1 + Loan.#taxRate)) / numOfInstallments
    ).toFixed(2);

    const installments = [];
    let currentDate = new Date(this.createAt);

    for (let i = 0; i < numOfInstallments; i++) {
      currentDate.setMonth(currentDate.getMonth() + 1);
      const installment = new Installment(
        new Date(currentDate),
        parseFloat(monthlyPayment)
      );
      installments.push(installment);
    }

    return installments;
  }  
}


