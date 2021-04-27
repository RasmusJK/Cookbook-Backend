import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     recipes: [Recipe]
     
     recipe(id:ID!):Recipe
     
   }
   
   type Recipe {
      id: ID
      recipeName: String
      ingredients: Ingredients
      steps: [String]
   }
   extend type Mutation {
   addRecipe(
    recipeName: String
    ingredients: ID
    steps: [String]
   ): Recipe
   }
   
 
`;
