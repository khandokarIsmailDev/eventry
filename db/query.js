import { eventModal } from "@/models/event-models";
import { replaceMongoIdInArray,replaceMongoIdInObject } from "@/utils/data-util";
import { userModel } from "@/models/user-modal";
import mongoose from "mongoose";

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

async function findUserByCreditial(credential){
    const user = await userModel.findOne(credential).lean()  //lean mane meta data amader dorkar nai
    if(user){
        return replaceMongoIdInObject(user)  // amara user info _id ta objectId thake, oitake amra string kore nilam just
    }
     return null
}


async function updateInterest(eventId,authId){
    const event = await eventModal.findById(eventId)

    //authId akta string, but amader authid object lagbe, tai objectid te convert korlam
    const convertAuthObject = new mongoose.Types.ObjectId(authId)

    if(event){    //first user k find kore ber korbo
        const foundUsers= event.interested_ids.find(id => id.toString() === authId)   //meta data dorkar, tai lean kora jabe na

        if(foundUsers){   //check korbo, user interest na thakle, add korbo. interest thakle ber kore dibo
            event.interested_ids.pull(convertAuthObject)    //pull mane ber kore dewa, mane already interested , eke akhon interested theke remove kore dilam
        }else{
            event.interested_ids.push(convertAuthObject)  //push mane interested cilo na, tai interest e add kore dilam
        }

        event.save()  //aita data base e save hoye jabe,but er jonno meta data dorkar, tai lean kora jabe na
    }
}


export{
    getAllEvents,
    getEventById,
    createUser,
    findUserByCreditial ,
    updateInterest
}