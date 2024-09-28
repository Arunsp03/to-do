"use client"
import { getAllTasks } from "@/actions/tasks";
import { useEffect } from "react";
export default function Home() {

  useEffect(()=>{
    const fetchdata=async()=>{
      try{
      const tasks=await getAllTasks();
      console.log(tasks);
      }
      catch(err){
        console.error(err)
      }
    }
    fetchdata()
  },[])
  return (
<div>
  Hello world
</div>
  );
}
