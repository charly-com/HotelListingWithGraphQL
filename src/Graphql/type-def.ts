import {gql} from 'apollo-server'

const typeDefs = gql`
 type Listing {
    id: ID!,
    title: String,
    image: String,
    address: String,
    price: Int,
    numOfBeds: Int,
    numOfGuest: Int,
    rating: Int
}

type Message {
    message: String
}

input CreateListingInput {
  
    title: String!,
    image: String!,
    address: String!,
    price: Int!,
    numOfBeds: Int!,
    numOfGuest: Int!,
    rating: Int!
}

input UpdateListing {
    title: String,
    image: String,
    address: String,
    price: Int,
    numOfBeds: Int,
    numOfGuest: Int,
    rating: Int
}

type Query {
    allListing: [Listing]
    singleListing(id: ID!): Listing
}

type Mutation {
    createListing(input: CreateListingInput): Listing
    updateListing(input: UpdateListing): Listing
    deleteListing(id: ID!): Message!
}
`

export default typeDefs