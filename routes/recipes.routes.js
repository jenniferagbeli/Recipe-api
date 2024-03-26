import {Router} from "express";
import multer from "multer";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

//configure multer(upload) middleware
const upload = multer({ dest: 'uploads/images' });

//create recipes router
const router = Router()


router.post('/', upload.single('image'), addRecipe );

router.get('/', getRecipes);

router.get('/:id', getRecipe );

router.patch('/:id', updateRecipe );

router.delete('/:id', deleteRecipe);

export default router;