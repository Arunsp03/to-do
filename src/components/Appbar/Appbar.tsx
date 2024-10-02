"use client"
import { signIn,signOut, useSession } from "next-auth/react";
const Appbar=()=>{
    const session=useSession();
    return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      {session.data?.user ?
      
    <button className="font-bold border-2 p-3 rounded-md" onClick={()=>{
        signOut()
    }}>Sign Out </button>:   <button className="font-bold border-2 p-3 rounded-md" onClick={()=>{
        signIn()
    }}>Sign In With Github </button>
    }      
            
        </div>
    );
}
export default Appbar;