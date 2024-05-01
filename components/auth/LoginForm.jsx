'use client'

import { useState } from "react";
import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";

const LoginForm = () => {

  const [error,setError] = useState("")

  const {setAuth} = useAuth()

  async function onSubmit(event){
    event.preventDefault()

    try{

      const formData = new FormData(event.currentTarget)

      await performLogin(formData )

    }catch(err){
      setError(err.message)
    }
  }

  return (
    <>
    <div className="my-2 text-red-500">
      {error}
    </div>
    <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button
        type="submit"
        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Login
      </button>
    </form>
    </>
  );
};

export default LoginForm;
