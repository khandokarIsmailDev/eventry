"use server";

import { createUser, findUserByCreditial } from "@/db/query";
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



  if (found) {
    redirect("/");
  } else {
    throw new Error(`User with email ${formData.get("email")} not found!`);
  }
}

export { registerUser, performLogin };
