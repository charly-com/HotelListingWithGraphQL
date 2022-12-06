"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// import logger from 'morgan';
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const apollo_server_1 = require("apollo-server");
const type_def_1 = __importDefault(require("./Graphql/type-def"));
const Graphql_1 = __importDefault(require("./Graphql"));
dotenv_1.default.config();
// const app = express();
// app.use(express.json());
// app.use(logger("dev"));
const server = new apollo_server_1.ApolloServer({
    typeDefs: type_def_1.default,
    resolvers: Graphql_1.default,
});
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(process.env.Database_Url, () => {
    console.log("Database connected");
});
const Port = 4000;
server.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
});
