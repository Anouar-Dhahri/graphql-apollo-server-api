import { gql } from "apollo-server-express";

// ! should not return null
const typeDefs =  gql`
    type Book {
      id: ID
      name: String!
      auther: String!
      genre : String!
      price : Int!
      createdAt:String
      updatedAt: String
    }
    
    type Query {
      getAllBooks: [Book!]!
      getBook(id: ID!): Book
    }

    type Mutation {
      addBook(name:String!, auther:String!, genre:String!, price: Int!):Book
      updateBook(id: ID!, name:String!, auther:String!, genre:String!, price: Int!): Book
      deleteBook(id: ID!): String
    }
`
export default typeDefs