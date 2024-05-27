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
    course:[Course]!
}

type Course{
    _id:ID!
    title:String!
    description:String!
    instructor:User!
    ratingsAverage:Int!
    ratingsQuantity:Int!
    price:Int!
    category:String!
    subCategory:String!
    level:String!
    language:String!
    whatYouWillLearn:[String]!
    createdAt:String!
    updatedAt:String!
}

type Resource{
    title:String
    url:String
    _id:ID
}

type VideoUrl{
    _480p:String
    _720p:String
    _1080p:String
}

type Lecture{
    _id:ID!
    title:String!
    description:String!
    position:Int!
    resources:[Resource]
    videoUrl:VideoUrl
    # section:Section!
}

type SampleUser{
    name:String!
    age:Int!
    gender:String!
}

type Query {
    users:[User]
    courses:[Course]
    course(id:ID!):Course
    lectures:[Lecture]
    sampleUser:[SampleUser]
}

type Mutation{
    newUser(name:String!,age:Int!,gender:String!):String!
}

`;
