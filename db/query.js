import { eventModal } from "@/models/event-models";


async function getAllEvents (){
    const events = await eventModal.find().lean()
    return events
}

export{
    getAllEvents
}