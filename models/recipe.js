import mongoose  from 'mongoose';

const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    recipeName: String,
    ingredients: {type: mongoose.Types.ObjectId, ref:"Ingredients"} ,
    steps: [String]
});

export default mongoose.model('Recipe', recipeSchema);
