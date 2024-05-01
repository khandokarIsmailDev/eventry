'use client'
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SigninOUt = () => {

    const {auth,setAuth} = useAuth()
    const router = useRouter()

    function logout(){
        setAuth(null)
        router.push('/login')
    }

    return (
        <div>
            {
                auth ? (
                    <>
                     <span className="mx-2">Hello, {auth?.name}</span>
                     <span className="mx-1">|</span>
                     <a href="" className=" cursor-pointer" onClick={logout}>Logout</a>
                    </>
                ) : (<Link href='/login' >Login</Link>)
            }
        </div>
    );
};

export default SigninOUt;