import Ingredients from "../models/ingredients.js"

export default {
    Recipe: {
        ingredients (parent)  {

            return Ingredients.findById(parent.ingredients)
        },
    },
    Mutation: {
        addIngredients: (parent,args ) => {
        console.log(args)

            const newIngredients = new Ingredients(args);
            return newIngredients.save();
        },
    },

};
