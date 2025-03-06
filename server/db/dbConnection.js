import mongoose from "mongoose";

const dbconnetion=(url)=>{
    mongoose.connect(url);
    console.log("Database connected successfully");
    mongoose.connection.on("error", (error)=>{
        console.log("Error connecting to database", error);
    })
}

export default dbconnetion;