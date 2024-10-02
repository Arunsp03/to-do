"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Appbar from "@/components/Appbar/Appbar";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const session=useSession();
  const router=useRouter();
  useEffect(()=>{
    if(session.data?.user?.name)
    {
      router.replace("/today");
    }
  },[])

  return <div className="flex flex-row ">
    {session.data?.user?.name ? <Sidebar/> :null}
    <Appbar/>
  </div>;
}
