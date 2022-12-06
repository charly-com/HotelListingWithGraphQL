"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const listingSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String },
    price: { type: Number },
    numOfBeds: { type: Number },
    numOfGuest: { type: Number },
    rating: { type: Number },
}, { timestamps: true });
exports.Listing = mongoose_1.default.model("Listing", listingSchema);
