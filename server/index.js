import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Cannot connect to MongoDB: " + error.message)
});
// mongoose.set("useFindAndModify", false);

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});