import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     recipes: [Recipe],
     recipe(id:ID!):Recipe
     
   }
   
   type Recipe {
      id: ID
      recipeName: String,
      ingredients: [{String, String}],
      steps: [String]
   }
   
 
`;
