import mongoose from "mongoose";


export async function dbConnect(){
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        return connect
    }catch(err){
        console.log(err)
    }
}