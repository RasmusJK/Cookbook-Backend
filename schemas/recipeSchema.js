import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     recipes: [Recipe]
     
     recipe(id:ID!):Recipe
     recipesByUser(author: String):[Recipe]
   }
   
   type Recipe {
      id: ID
      recipeName: String
      ingredients: [String]
      steps: [String]
      author: String
      File: String
   }
  input Image {
    File: Upload
    }
   
   extend type Mutation {
   addRecipe(
    recipeName: String
    ingredients: [String]
    steps: [String]
    author: String
    File: Image
   ): Recipe
   }
   
 
`;
