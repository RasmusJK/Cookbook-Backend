import mongoose  from 'mongoose';

const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    recipeName: String,
    ingredients: [String],
    steps: [String],
    author: String,
    file: String
});

export default mongoose.model('Recipe', recipeSchema);
