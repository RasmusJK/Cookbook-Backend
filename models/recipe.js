import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    recipeName: String,
    ingredients: [{ingredientName: String, value: String}],
    steps: [String]
});

export default mongoose.model('Recipe', recipeSchema);
