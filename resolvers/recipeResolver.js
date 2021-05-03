import Recipe from '../models/recipe.js';
import {AuthenticationError} from "apollo-server-express";
import fs from 'fs';
import path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const  generateRandomString = (length)=> {
    let result           = [];
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}


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

                    let {filename, createReadStream} = await args.file.file;
                    const {ext}= path.parse(filename);
                  const randomFileName =generateRandomString(12) + ext
                    const stream = createReadStream();
                    const pathName = path.join(__dirname,`/../public/images/${randomFileName}`); // Should work in jelastic
                   // const pathName = path.join(`/home/jelastic/ROOT/public/images/${filename}`);
                    await stream.pipe(fs.createWriteStream(pathName));
                    const imageUrl = {
                      //  url: `http://localhost:3000/images/${randomFileName}`
                        url: `https://my-app-123.jelastic.metropolia.fi/images/${randomFileName}`
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
