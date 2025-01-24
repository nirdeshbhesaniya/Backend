import dotenv from 'dotenv';
import express from 'express'; // Import express
import connectDB from './db/index.js'; // Your database connection logic

// Load environment variables
dotenv.config({
    path: './.env',
});

// Initialize Express application
const app = express();

// Connect to the database and start the server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err);
    });




/*
import express from 'express';
const app = express();
; (async () => {
    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        }
        )
        app.listen(process.env.PORT, () => {
            console.log(`APP is running on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR:", error);
        throw error;

    }
})()*/