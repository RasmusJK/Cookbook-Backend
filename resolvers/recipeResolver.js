import Recipe from '../models/recipe.js';
import {AuthenticationError} from "apollo-server-express";
import fs from 'fs';
import path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



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
        addRecipe: async (parent, args,{user}) => {
            console.log('recipeResolver. addRecipe',args );
            if(!user){
                throw new AuthenticationError('Not authenticated');
            }

            try {
                if (!args.file.file){
                    console.log("without files",args);

                    const newRecipe = new Recipe(args);
                    return await newRecipe.save();
                } else {

               /*
                    console.log("contains file",args);

                    const { createReadStream, filename } = await args.File.File;
                const stream = createReadStream();
                const pathName = path.join(__dirname,`/../public/images/${filename}`);

                await stream.pipe(fs.createWriteStream(pathName));
                    const imageUrl = {
                        url: `http://localhost:3000/images/${filename}`
                    };
                    let recipe = {...args, File: imageUrl.url};
                    let newRecipe = new Recipe(recipe);
                    return await newRecipe.save();
*/

                    let {filename, createReadStream} = await args.file.file;
                    const stream = createReadStream();
                    const pathName = path.join(__dirname,`/../public/images/${filename}`);
                    await stream.pipe(fs.createWriteStream(pathName));
                    const imageUrl = {
                        url: `http://localhost:3000/images/${filename}`
                    };
                    let entry = {...args, file: imageUrl.url};
                    let newRecipe = new Recipe(entry);
                    return await newRecipe.save();
                }

            } catch (e){
                throw new Error(e);
            }


        }
    }

};
