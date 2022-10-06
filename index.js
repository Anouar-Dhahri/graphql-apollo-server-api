import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express';

import mongoConnect from './connection/index.js'

import { typeDefs, resolvers } from './graphql/index.js'

const app = express()
const port = process.env.PORT || 8080
const server = new ApolloServer({ typeDefs, resolvers, cache: "bounded", persistedQueries: false }); //typeDefs, resolvers

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());

mongoConnect();

await server.start();
server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Surver Working On Port ${port}!`))