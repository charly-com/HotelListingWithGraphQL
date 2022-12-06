// import express from 'express';
// import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {ApolloServer} from 'apollo-server'
import typeDefs from './Graphql/type-def'
import resolvers from './Graphql'
dotenv.config()

// const app = express();

// app.use(express.json());


// app.use(logger("dev"));
const server = new ApolloServer({
   typeDefs,
    resolvers,
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.Database_Url!, () => {
    console.log("Database connected");
})


const Port = 4000;

server.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
})

