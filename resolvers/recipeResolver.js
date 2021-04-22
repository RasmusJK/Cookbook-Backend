import Recipe from '../models/recipe.js';




export default {
    Query: {
        recipes: (parent, args) => {
            return Recipe.find();
        },
        recipe: (parent,args) => {
            return Recipe.findById(args.id);
        }

    },


};
