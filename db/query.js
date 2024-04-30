import { eventModal } from "@/models/event-models";


async function allEvents (){
    const events = await eventModal.find()
    return events
}

export{
    allEvents
}