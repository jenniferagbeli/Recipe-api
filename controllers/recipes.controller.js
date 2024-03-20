import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
    // Add/creare recipe to database
    const createResult = await RecipeModel.create(req.body);
    // Return response
    res.json(createResult);
}

export const getRecipes = (req, res) => {
    res.send('Get all recipe');
}

export const getRecipe = (req,res) => {
    res.send('Get single recipe');
}

export const updateRecipe = (req,res) => {
    res.send('Update recipe');
}

export const deleteRecipe = (req,res) => {
    res.send('Delete recipe');
}

