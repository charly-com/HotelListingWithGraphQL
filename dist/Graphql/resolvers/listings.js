"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listingModel_1 = require("../../model/listingModel");
const ListingResolver = {
    Query: {
        allListing: async () => {
            try {
                const listing = await listingModel_1.Listing.find();
                return listing;
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    Mutation: {}
};
exports.default = ListingResolver;
