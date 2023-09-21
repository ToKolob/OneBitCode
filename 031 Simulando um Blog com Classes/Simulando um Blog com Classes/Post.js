const Comment = require('./Comment.js')

class Post {
  constructor (author,title,content){
    this.author = author,
    this.title = title,
    this.content = content
    this.comments = []
  }
  newComment (text) {
    this.comments.push(new Comment(text))
    
  }
}

module.exports = Post
