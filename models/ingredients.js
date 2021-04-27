import mongoose  from 'mongoose';

const Schema = mongoose.Schema;


const ingredientsSchema = new Schema({
    ingredients: [String],


});

export default mongoose.model('Ingredients', ingredientsSchema);
