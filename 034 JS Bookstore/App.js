import { Database } from "./Database.js"
import { Author } from "./entities/Author.js"
import { Book } from "./entities/Book.js"
import { Order } from "./entities/Order.js"
import { Poster } from "./entities/Poster.js"
import { User } from "./entities/User.js"

export class App {
  static #database = new Database()

  createUser(name,email,password){
    const user = new User(name,email,password)
    App.#database.saveUser(user)
  }

  getUsers(){
    return App.#database.find('users')
  }

  createAuthor(name, nationality,bio) {
    const author = new Author(name,nationality,bio)
    App.#database.saveAuthor(author)
  }

  getAuthor(){
    return App.#database.find("authors")
  }

  createBook(title,synopsis,genre,pages,author,description,price,inStock){
  const book = new Book(title,synopsis,genre,pages,author,description,price,inStock)
  App.#database.saveBook(book)
  }

  addBook(bookName, quantity){
    App.#database.addBookToStock(bookName,quantity)
  }

  getBooks(){
    return App.#database.find('books')
  }

  cratePoster(name,description,price,inStock,dimension){
    const poster = new Poster(name,description,price,inStock,dimension)
    App.#database.savePoster(poster)
  }

  addPoster(posterName,quantity){
    App.#database.addposterToStock(posterName,quantity)
  }

  getPosters(){
    return App.#database.find('posters')
  }

  CreateOrder(items,user){
    const order = new Order(items,user)
    App.#database.saveOrder(order)

    order.data.items.forEach(({product,quantity}) => {
      if (product instanceof Book) {
        App.#database.removeBookFromStock(product.name, quantity)
        
      } else if (product instanceof Poster) {
        App.#database.removeposterFromStock(product.name,quantity)
      }

    });
  }

  getOrders(){
    return App.#database.find('orders')
    
  }

  showDatabase(){
    App.#database.showStorage()
  }
}