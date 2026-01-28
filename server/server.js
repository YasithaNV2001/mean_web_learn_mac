import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';


dotenv.config();
console.log("My Connection String is:", process.env.MONGO_URI); // <--- Add this line
const app = express();

app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 5000;


const startServer = async ()=>{

    try{
        await connectDB();
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

    }catch(error){
        console.error("Failed to start server" , error)
    }
}

startServer();