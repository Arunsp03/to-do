"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import Tasks from "@/components/Tasks/Tasks";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Today=()=>{
const session=useSession();
const router=useRouter();
useEffect(()=>{
if(!session.data?.user?.name)
{
    router.replace("/")
}
},[])

    return (
        <>
    <Sidebar/>
    <Tasks/>
        </>
    )
}
export default Today;