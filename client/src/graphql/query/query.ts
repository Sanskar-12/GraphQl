import { gql } from "@apollo/client";

export const getUsers = gql(`

# query Query {
#   courses {
#     title
#     description
#   } 
# }

query Query {
 sampleUser {
   name
 }
}


`);

export const addUsers = gql(`

mutation Mutation($name: String!, $age: Int!, $gender: String!) {
  newUser(name: $name, age: $age, gender: $gender)
}


`);
