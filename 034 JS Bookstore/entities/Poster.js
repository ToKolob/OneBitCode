import { product } from "./Product.js";

export class Poster extends product {
  constructor(name, description,price,inStock,dimension){
    super(name,description,price,inStock)
    this.dimension = dimension
  }
 }
