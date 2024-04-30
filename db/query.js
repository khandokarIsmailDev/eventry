import { eventModal } from "@/models/event-models";
import { replaceMongoIdInArray } from "@/utils/data-util";

async function getAllEvents (){
    const allEvents = await eventModal.find().lean()
    return replaceMongoIdInArray(allEvents)
}

export{
    getAllEvents
}