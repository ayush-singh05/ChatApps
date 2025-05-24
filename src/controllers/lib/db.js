import mongoose from 'mongoose'


export const connceDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        
    } catch (error) {
        console.log("Error while connecting ",error);
        process.exit
    }
} 