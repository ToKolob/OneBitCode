class Product {
  constructor(name,description,price){
    this.name =  name,
    this.description = description,
    this.price = price
    this.inStock = 0
  }
  addToStock(n){
    this.inStock += n
  }
}

const fermento = new Product ('fermento','faz crescer o bolo','12.50')

console.log(fermento);

fermento.addToStock(10)

console.log(fermento);

fermento.addToStock(10)

console.log(fermento);