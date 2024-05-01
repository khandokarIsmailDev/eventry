import { eventModal } from "@/models/event-models";
import { replaceMongoIdInArray,replaceMongoIdInObject } from "@/utils/data-util";
import { userModel } from "@/models/user-modal";

async function getAllEvents (){
    const allEvents = await eventModal.find().lean()
    return replaceMongoIdInArray(allEvents)  //Object id theke string e convert korlam
}

async function getEventById(eventId){                   //lean moloto unwanted field jate na ase , tai use kori, 
    const event = await eventModal.findById(eventId).lean() //er moddew akta _id ja string na ObjectId, but amader string dorkar
    return replaceMongoIdInObject(event)
}


async function createUser(user){
    return await userModel.create(user)
}


export{
    getAllEvents,
    getEventById,
    createUser
}