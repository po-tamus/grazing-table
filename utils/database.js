import mongoose from "mongoose";

let isConnected = false

// try to connect to mongoose
// if unable to, error

export const connectToDatabase = async () => {

    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("Already connected to Mongo Database");
        return;
    } else {
        try {
            // api is able to connect to the mongo database
            await mongoose.connect(process.env.MONGODB_MENUS_URI, {
                dbName: "menus-database", 
            })
    
            isConnected = true;
            console.log("Successfully Connected to Mongo Database");
    
        } catch(err) {
            console.log(err);
        }
    }
}