import {app} from "./app";
import mongoose from "mongoose";

const start = async () => {
    console.log("Starting up...");
    if (!process.env.JWT_KEY) {
        throw new Error("JWT_KEY is not undefined");
    }

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not undefined");
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!');
    });
};

start();