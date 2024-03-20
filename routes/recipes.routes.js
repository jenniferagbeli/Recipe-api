import {Router} from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

const router = Router()


router.post('/', addRecipe );

router.get('/', getRecipes);

router.get('/:id', getRecipe );

router.patch('/:id', updateRecipe );

router.delete('/:id', deleteRecipe);

export default router;