import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/recipes.routes.js";
import cors from "cors";


// load env variables
dotenv.config();

const PORT = process.env.PORT
const url = process.env.MONGO_URI;

// start the app
const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('uploads'));

// Route
app.use('/recipes', router)

// make mongoose database connection
await mongoose.connect(url);

// lisen to incoming request
app.listen(PORT, () => {
    console.log(`Recipe app is running! ${PORT}`)
})