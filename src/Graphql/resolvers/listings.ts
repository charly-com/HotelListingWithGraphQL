import {Listing, ListingType} from '../../model/listingModel';

const ListingResolver = {
    Query: {
        allListing: async() => {
            try{
                const listing = await Listing.find()
                return listing
            }catch(err) {
              console.log(err)
            }
        }
    },
    Mutation: {

    }
}

export default ListingResolver;
