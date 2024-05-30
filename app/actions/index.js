"use server";

import { createUser, findUserByCreditial,updateInterest } from "@/db/query";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// use server tokoni use kori, jokon seita kono motei client component posible na, explicit server component

async function registerUser(formData) {
  //input name ta nibe, auto matic, kisoi bole dite hobe na, amazing
  const user = Object.fromEntries(formData); //form er name gola k niye akta object kore dise just ai object.fromeEnties use kore

  const created = createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email"); 
    credential.password = formData.get("password");
    const found = await findUserByCreditial(credential);
    return found
  } catch (error) {
    throw Error
  }

}


async function addInterestedEvent(eventId,authId){
    try{
        await updateInterest(eventId,authId)
    }catch(error){
        throw error
    }

    // akhon cache clear korbo, jate interested ta show kore, er jonno revalidatePath use korsi 
    revalidatePath('/')
}



export { registerUser, performLogin,addInterestedEvent };
