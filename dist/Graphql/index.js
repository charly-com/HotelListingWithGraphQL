"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listings_1 = __importDefault(require("./resolvers/listings"));
exports.default = {
    Query: {
        ...listings_1.default.Query
    },
    Mutation: {
        ...listings_1.default.Mutation
    }
};
