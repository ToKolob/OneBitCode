const Post = require('./Post')

class Author {
  constructor (name){
    this.name = name
    this.posts = []
  }
  newPost (title,content){
    const post = new Post(this,title,content)
    this.posts.push(post)
    return post
  }
}

const post1 = new Author('lucas').newPost('O feijao','os beneficios do...')
const comment1 = post1.newComment('shupa bala hall')

console.log(post1);

