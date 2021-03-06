import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    login(username: String!, password: String!): User
     user(id: ID!): User
  }
  type User {
    id: ID
    username: String
    token: String
  }
  extend type Mutation {
    register(username: String!, password: String!): User
  }
  
`;
