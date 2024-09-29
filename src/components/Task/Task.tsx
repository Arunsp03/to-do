"use client"
import { useState } from "react"
const Task=(props:any)=>{
    const [editMode,setEditMode]=useState(false)
    const[EditForm,setEditForm]=useState({
        task:props.item.task,
        priority:props.item.priority,
        completion_Date:props.item.completion_Date
    });
const editTask=()=>{
    setEditMode(prev=>!prev)
   // console.log(props.item)
}
const handleEditForm=(e:any)=>{
           

    setEditForm((prev)=>({
        ...prev,
        [e.target?.name]:e.target?.value
    }))
    
}
const toggleEditForm=()=>{
    setEditMode(prev=>!prev)
}
const formatDateForInput = (dateString:string) => {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
};
const submitTask=async ()=>{
    try{
    const response=await fetch("https://to-do-seven-gold.vercel.app//api/tasks/addTask",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({taskform:EditForm,"create":false})
    });
   
}
catch(err)
{
    console.error(err);
}

}
return (
    <>
    { !editMode ?(
    <div  className="p-2 m-2 border-b-2 cursor-pointer flex flex-row justify-between">
    <div className="flex flex-row">
    <input className="rounded" type="checkbox" id="mark_completion" name="mark_completion" checked={props.item.completed} 
    value={props.item.completed}
    onChange={(e)=>{
        props.handleCompletion(e,props.item.id)
    }}
    />
    <p className="ml-2">{props.item.task}</p>
    </div>
    <button type="button" onClick={()=>{
       editTask();
    }}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Pencil--Streamline-Core" height={14} width={14} ><desc>{"Pencil Streamline Icon: https://streamlinehq.com"}</desc><g id="pencil--change-edit-modify-pencil-write-writing"><path id="Vector" fill="#d7e0ff" d="M5 12.24 0.5 13.5 1.76 9 10 0.799998c0.0931 -0.095246 0.2044 -0.170925 0.3271 -0.222592 0.1228 -0.051668 0.2547 -0.078283 0.3879 -0.078283 0.1332 0 0.2651 0.026615 0.3879 0.078283 0.1227 0.051667 0.234 0.127346 0.3271 0.222592L13.2 2.58c0.0937 0.09296 0.1681 0.20356 0.2189 0.32542 0.0508 0.12186 0.0769 0.25257 0.0769 0.38458 0 0.13201 -0.0261 0.26272 -0.0769 0.38457 -0.0508 0.12186 -0.1252 0.23247 -0.2189 0.32543L5 12.24Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="m5 12.2399 -4.5 1.26 1.26 -4.5L10 0.799899c0.0931 -0.095246 0.2044 -0.170925 0.3271 -0.222593 0.1228 -0.051667 0.2547 -0.078283 0.3879 -0.078283 0.1332 0 0.2651 0.026616 0.3879 0.078283 0.1227 0.051668 0.234 0.127347 0.3271 0.222593L13.2 2.5799c0.0937 0.09296 0.1681 0.20356 0.2189 0.32542 0.0508 0.12186 0.0769 0.25257 0.0769 0.38458 0 0.13201 -0.0261 0.26272 -0.0769 0.38458 -0.0508 0.12185 -0.1252 0.23246 -0.2189 0.32542l-8.2 8.24Z" strokeWidth={1} /></g></svg>
    </button>
    </div>):    <form className="border-2 w-[50vw] p-2 flex flex-col mb-4">
            <div className="p-2">
                <input className="border-none outline-none" value={EditForm.task} type="text" name="task" id="task" placeholder="Task name" onChange={(e)=>{
                    handleEditForm(e)
                }}/>
                </div>
                <div className="p-2" >
                <select value={EditForm.priority}  typeof="number" name="priority" id="priority"   onChange={(e)=>{
                    handleEditForm(e)
                }} className="border-none outline-none">
                <option disabled selected value={""}>Priority</option>
                <option  value={1}>Priority 1</option>
                <option  value={2}>Priority 2</option>
                <option  value={3}>Priority 3</option>
                </select>
            
                <input  value={EditForm.completion_Date} className="border-none outline-none ml-4" placeholder="Completion date" type="date" id="completion_Date" name="completion_Date"
                onChange={(e)=>{
                    handleEditForm(e)
                }}/>
                </div>
                <div className="btn-section mt-2" >
                <button type="button" className="p-2 rounded" onClick={()=>{
                  submitTask()
                }}>Save</button>
                <button className="ml-4 bg-red-400 p-2  rounded" type="button" onClick={()=>{
                toggleEditForm()
                }}>Close</button>
                </div>
            </form>
    }

    </>
)
}
export default Task;