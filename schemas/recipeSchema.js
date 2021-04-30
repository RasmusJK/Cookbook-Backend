import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     recipes: [Recipe]
     
     recipe(id:ID!):Recipe
     
   }
   
   type Recipe {
      id: ID
      recipeName: String
      ingredients: [String]
      steps: [String]
      author: String
   }
   extend type Mutation {
   addRecipe(
    recipeName: String
    ingredients: [String]
    steps: [String]
    author: String
   ): Recipe
   }
   
 
`;
