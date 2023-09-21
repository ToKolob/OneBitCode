export class Database 
{
  #storage = 
  {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }
  find(key){
    return this.#storage[key]
  }
  saveAuthor(author)
  {
    this.#storage.authors.push(author)
  }
  saveBook(book)
  {
    const bookExists = this.#storage.books.find(b => b.name === book.name)
    if (!bookExists) 
    {
      this.#storage.books.push(book)
    }
  }

  addBookToStock(bookName,quantity){
    const book = this.#storage.books.find(b => b.name === bookName.name)
    book?.addBookToStock(quantity)
  }

  removeBookFromStock(bookName,quantity){
    const book = this.#storage.books.find(b => b.name === bookName.name)
    book?.removeBookFromStock(quantity)
  }      




savePoster(poster)
  {
    const posterExists = this.#storage.poster.find(b => b.name === poster.name)
    if (!posterExists) 
    {
      this.#storage.posters.push(poster)
    }
  }

  addposterToStock(posterName,quantity){
    const poster = this.#storage.posters.find(b => b.name === posterName.name)
    poster?.addposterToStock(quantity)
  }

  removeposterFromStock(posterName,quantity){
    const poster = this.#storage.posters.find(b => b.name === posterName.name)
    poster?.removeposterFromStock(quantity)
  }

  saveUser (user){
    const usersExists = this.#storage.users.find(u => u.email === user.email)
    if (!usersExists){
      this.#storage.users.push(user)
    }
  }
  saveOrder(order){
    this.#storage.orders.push(order)

  }
  showStorage (){
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
}


