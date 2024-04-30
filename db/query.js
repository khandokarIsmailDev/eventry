import { eventModal } from "@/models/event-models";
import { replaceMongoIdInArray,replaceMongoIdInObject } from "@/utils/data-util";

async function getAllEvents (){
    const allEvents = await eventModal.find().lean()
    return replaceMongoIdInArray(allEvents)  //Object id theke string e convert korlam
}

async function getEventById(eventId){                   //lean moloto unwanted field jate na ase , tai use kori, 
    const event = await eventModal.findById(eventId).lean() //er moddew akta _id ja string na ObjectId, but amader string dorkar
    return replaceMongoIdInObject(event)
}

export{
    getAllEvents,
    getEventById
}