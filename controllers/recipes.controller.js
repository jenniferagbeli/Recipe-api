import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
    try {
        // Add/creare recipe to database
        const createResult = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(createResult);
    }
    catch (error) {
        // Forward to error handler  
        next(error);
    }
}

export const getRecipes = async (req, res, next) => {
    try {
        //    Get all resipes from database
        const findRecipes = await RecipeModel.find({})
        // Return respone
        res.json(findRecipes)
    }
    catch (error) {
        next(error);
    }
}

export const getRecipe = async (req, res, next) => {
    // Get single recipe with id
    try {
        const findOneId = await RecipeModel.findById(req.params.id)
        // return 404 if recipe not found
        if (!findOneId === null) {
            return res.status(404).json({
                message: `Recipe with ObjectId: ${req.params.id} Not Found`
            })
        }
        // Return response
        res.json(findOneId)
    }
    catch (error) {
        next(error);
    }
}

export const updateRecipe = (req, res) => {
    res.send('Update recipe');
}

export const deleteRecipe = (req, res) => {
    res.send('Delete recipe');
}

