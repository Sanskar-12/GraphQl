export const types = `#graphql

type User{
    _id:ID!
    name:String!
    email:String!
    password:String
    googleId:String
    role:String!
    avatar:String!
    verified:Boolean!
    createdAt:String!
    updatedAt:String!
}

type Query {
    users:[User]
}

`;
