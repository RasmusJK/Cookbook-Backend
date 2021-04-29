'use strict';
import {gql} from 'apollo-server-express';
import recipeSchema from "./recipeSchema.js";
import userSchema from "./userSchema.js";
const linkSchema = gql`
   type Query {
     _: Boolean
   }
   
   type Mutation {
     _: Boolean
   }
`;

export default [
    linkSchema,
    recipeSchema,
    userSchema
];
