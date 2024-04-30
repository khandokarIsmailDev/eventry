import mongoose,{Schema} from "mongoose";

const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    interested_ids:{
        type:Array
    },
    going_ids:{
        type:Array
    },
    swags:{
        type:Array
    }
})


export const eventModal = mongoose.model.events ?? mongoose.model("events",schema )