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
    Mutation: {
        addRecipe: (parent, args) => {
            console.log('recipeResolver. addRecipe',args );

            const newRecipe = new Recipe(args);
            return newRecipe.save()
        }
    }

};
