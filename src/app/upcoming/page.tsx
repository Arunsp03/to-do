"use client"
import Calendar from "@/components/Calendar/Calendar";
import Sidebar from "@/components/Sidebar/Sidebar";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const Upcoming=()=>{

    const session=useSession();
    const router=useRouter();
    useEffect(()=>{
    if(!session.data?.user?.name)
    {
        router.replace("/")
    }
    },[])

    return(
        <>
        <Sidebar/>
        <Calendar/>
        </>
    )
}
export default Upcoming;