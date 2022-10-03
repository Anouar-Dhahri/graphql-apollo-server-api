import Book from '../models/Book.js'

const resolvers = {
  Query: {
    getAllBooks: async (parent, args) => {
      const books = await Book.find();
      return books
    },
    getBook: async (parent, args) => {
      const data = await Book.findById(args.id);
      return data
    }  
  },
  Mutation : {
    addBook: async (parent, args) => {
      const book = new Book({
        name:args.name,
        auther:args.auther,
        genre:args.genre,
        price:args.price
      })
      const result = await book.save().then((res) => {
        return res
      })
      return result;
    },
    updateBook: async (parent, args) => {
      const result = await Book.findByIdAndUpdate(args.id, 
        {        
          $set: {
            name:args.name,
            auther:args.auther,
            genre:args.genre,
            price:args.price
          }
        }
      ).then((res) => {
        return res
      });
      return result;
    },
    deleteBook: async (parent, args) => {
      await Book.findByIdAndDelete(args.id);
      return "Book Deleted";
    }
  }
}

export default resolvers