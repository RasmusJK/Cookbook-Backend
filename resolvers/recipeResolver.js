import Recipe from '../models/recipe.js';
import {AuthenticationError} from "apollo-server-express";




export default {
    Query: {
        recipes: (parent, args) => {
            return Recipe.find();
        },
        recipe: (parent,args) => {
            return Recipe.findById(args.id);
        },
        recipesByUser:(parent,args) =>{
          return Recipe.find().where('author').equals(args.author);
        }

    },
    Mutation: {
        addRecipe: (parent, args,{user}) => {
            console.log('recipeResolver. addRecipe',args );
            if(!user){
                throw new AuthenticationError('Not authenticated');
            }

            const newRecipe = new Recipe(args);
            return newRecipe.save()
        }
    }

};
