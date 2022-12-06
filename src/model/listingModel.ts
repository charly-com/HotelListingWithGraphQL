import mongoose from 'mongoose';

export interface ListingType {
    _id: string;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfBeds: number;
    numOfGuest: number;
    rating: number;
}

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true},
    image: { type: String, required: true},
    address: { type: String},
    price: { type: Number},
    numOfBeds: { type: Number},
    numOfGuest: { type: Number},
    rating: { type: Number},
},
{timestamps: true}
)

export const Listing = mongoose.model<ListingType>("Listing", listingSchema);