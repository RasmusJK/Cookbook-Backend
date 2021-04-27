import {gql} from 'apollo-server-express';

export default gql`

   
   type Ingredients {
      id: ID,
      ingredients: [String]
     
   }
   extend type Mutation {
     addIngredients(ingredients: [String]): Ingredients
   }

`;
