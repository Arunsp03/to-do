import Task from "@/models/taskInterface";

const fetchTodaysTasks=async(session:any)=>{
    try{
   //  console.log("username",session.data?.user?.name);
     const response=await fetch("/api/tasks/getTodaysTasks",{
         cache:"no-store",
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({"user":session.data?.user?.name})
     });
     const data=await response.json();
     return data;
    }
    catch(err)
    {
     console.error(err);
    }
 }  
 const fetchAllTasks=async(session:any)=>{
    const response=await fetch("/api/tasks/getAllTasks",{
        cache:"no-store",
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"user":session.data?.user?.name})
    });
    const data=await response.json();
    return data;
}

const AddTask=async (taskForm:Task,session:any)=>{
    try{
    const response=await fetch("/api/tasks/addTask",{
        cache:"no-store",
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({taskForm,"create":true,"user":session.data?.user?.name})
    });
}
catch(err)
{
    console.error(err);
}
}
const handleTaskCompletion=async (e:any,id:number)=>{
    try{
        
      //  console.log(e.target.checked)
    const response=await fetch("/api/tasks/markCompleted",{
        cache:"no-store",
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id:id})
    });
e.target.checked=false;


}
    catch(err)
    {
        console.error(err)
    }

}
const saveEditedTask=async (EditForm:Task,id:number)=>{
    try{
      //  console.log("id",id);
    const response=await fetch("/api/tasks/addTask",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({taskForm:EditForm,"create":false,id:id})
    });
}
catch(err)
{
    console.error(err);
}
}

export default {fetchTodaysTasks,fetchAllTasks,AddTask,handleTaskCompletion,saveEditedTask}