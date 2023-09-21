class Comment {
  constructor(text){
    this.text = text
  }
}

class Post {
  constructor(author,title,content){
    this.author = author
    this.title = title
    this.content = content
    this.comment = []    
  }
  addComment(text){
    const newComment = new Comment(text)
    this.comment.push(newComment)
  }
}

class Author {
  constructor(name){
    this.name = name
    this.posts = []
  }
  addPost(title,content){
    const newPost = new Post(this,title,content)
    this.posts.push(newPost)
    return newPost
  }
}

console.log(Author);
console.log(Post);
console.log(Comment);

const newAuthor = new Author("Lucas")
const post1 = newAuthor.addPost('Facas','facas sao legais e tralala...')
post1.addComment("sovaca aqui")

console.log(newAuthor);
console.log(post1);
console.log(Comment);