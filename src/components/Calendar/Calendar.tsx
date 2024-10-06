"use client"
import calendar from '@/data/calendar.json';
import { useEffect, useRef, useState } from "react";
import Task from '../Task/Task';
import { useSession } from 'next-auth/react';
import ApiService from "@/api/Apiservice"
const {fetchAllTasks,AddTask,handleTaskCompletion}=ApiService;
const Calendar=()=>{
const session=useSession();
    const[showTaskForm,setShowTaskForm]=useState<string|null>(null)
    const[taskForm,setTaskForm]=useState({
        task:"",
        priority:"",
        completion_Date:""
    });
    const[tasks,setTasks]=useState([])
    const fetchData=async()=>{
      try{
        const data=await fetchAllTasks(session);
        setTasks(data);
      }
      catch(err)
      {
        console.error(err);
      }
    }
    const resetTaskForm=()=>{
        setTaskForm({
            task:"",
            priority:"",
            completion_Date:""
        })
    }
    const toggleTaskForm = (date: string | null,item:any) => {
        console.log("here",item);
        if(item){
       
        setTaskForm(
            {
        task:item.task||"",
        priority:item.priority||"",
        completion_Date:item.completion_Date||"" 
            }
        )}
        else{
            resetTaskForm();
        }
        setShowTaskForm((prev) => (prev === date ? null : date));
      };
    const handleTaskForm=(e:any,date:string)=>{
           

        setTaskForm((prev)=>({
            ...prev,
            [e.target?.name]:e.target?.value,
            "completion_Date":date
        }))
        
    }
    const submitTask=async ()=>{
        try{
       const response=await AddTask(taskForm,session);
        fetchData();
        toggleTaskForm(taskForm.completion_Date,taskForm);
        resetTaskForm()
    }
    catch(err)
    {
        console.error(err);
    }
    
    }

      const handleCompletion=async (e:any,id:number)=>{
        try{
            
          //  console.log(e.target.checked)
          const response=await handleTaskCompletion(e,id);
    e.target.checked=false;
    fetchData();
 
    }
        catch(err)
        {
            console.error(err)
        }
    
    }
    useEffect(()=>{
        fetchData();
       
    },[])
    useEffect(() => {
        setTaskForm({
          task: taskForm.task,
          priority: taskForm.priority,
          completion_Date: taskForm.completion_Date,
        });
      }, [taskForm]);
   
return(
    <div>
    <div className="container   h-[100vh]  flex flex-col  items-center mt-10 mb-4 " style={{marginLeft:"12rem", width:"auto"}}>
    <h2 className="font-bold text-lg">Upcoming Tasks</h2>
<div className="w-[50vw] m-4">
    {calendar && calendar.months.map((item,index)=>{
        return (
            <div key={index}>
                {item.days.map((day,index)=>{
                    return (
                        
                        <div key={index}>
                            {new Date(day.date) >= new Date(new Date().toISOString().split("T")[0])?
                                               
                                               <div className='m-4'>
                                               <p className='font-bold'>{day.date} - {day.day} {new Date(day.date) == new Date(new Date().toISOString().split("T")[0])?"Today":""}</p>
                                               
                                               <button type="button" className="mt-4 flex flex-row justify-center items-center" onClick={(e)=>{
                toggleTaskForm(day.date,null)
                handleTaskForm(e,day.date);

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Add-1--Streamline-Core" height={14} width={14} ><desc>{"Add 1 Streamline Icon: https://streamlinehq.com"}</desc><g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math"><path id="Vector" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7 0.5v13" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M0.5 6.95996h13" strokeWidth={1} /></g></svg>
            <span className="ml-2">New Task</span>
                </button>
                { showTaskForm==day.date && <form className="border-2 w-[50vw] p-2 flex flex-col mb-4">
            <div className="p-2">
                <input className="border-none outline-none" value={taskForm.task} type="text" name="task" id="task" placeholder="Task name" onChange={(e)=>{
                    handleTaskForm(e,day.date)
                }}/>
                </div>
                <div className="p-2" >
                <select value={taskForm.priority}  typeof="number" name="priority" id="priority"   onChange={(e)=>{
                    handleTaskForm(e,day.date)
                }} className="border-none outline-none">
                <option disabled selected value={""}>Priority</option>
                <option  value={1}>Priority 1</option>
                <option  value={2}>Priority 2</option>
                <option  value={3}>Priority 3</option>
                </select>
            
                <input value={taskForm.completion_Date} className="border-none outline-none ml-4" placeholder="Completion date" type="date" id="completion_Date" name="completion_Date"
                onChange={(e)=>{
                    handleTaskForm(e,day.date)
                }}/>
                </div>
                <div className="btn-section mt-2" >
                <button type="button" className="p-2 rounded" onClick={()=>{
                    submitTask()
                }}>Save</button>
                <button className="ml-4 bg-red-400 p-2  rounded" type="button" onClick={()=>{
                toggleTaskForm(day.date,null)
                }}>Close</button>
                </div>
            </form>
    }
                                                <div className="tasks-container" >
                        
                                                                {tasks.filter((task: any) => task.completion_Date === day.date)
                                                                .map((filteredTask: any, taskIndex) => (
                                                                    <div key={taskIndex} className="task">
                                                                        <Task item={filteredTask} key={index}  taskForm={filteredTask} fetchData={fetchData} handleCompletion={handleCompletion}/>
                        
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            </div>:<div></div>   
                        }

                        </div>
                    )
                })}
            </div>
        )
    })}
</div>
</div>
</div>
)
}
export default Calendar;