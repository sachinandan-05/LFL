import express from "express";
import dbconnetion from "./db/dbConnection.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

const main = async () => {
    try {
        await dbconnetion(process.env.MONGO_DB_URL);
        console.log(process.env.PORT)
        
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
}

main();