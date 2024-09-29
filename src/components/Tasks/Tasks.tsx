    "use client"

    import { useEffect, useState } from "react";
import Task from "../Task/Task";

    const Tasks=()=>{
        const[incompleteTasks,setIncompleteTasks]=useState([])
       
        const[showTaskForm,setShowTaskForm]=useState(false)
        const[taskForm,setTaskForm]=useState({
            task:"",
            priority:"",
            completion_Date:""
        });
        const handleTaskForm=(e:any)=>{
           

            setTaskForm((prev)=>({
                ...prev,
                [e.target?.name]:e.target?.value
            }))
            
        }
        const toggleTaskForm=()=>{
            setShowTaskForm(prev=>!prev);
        }
        const fetchData=async()=>{
            const response=await fetch("https://to-do-seven-gold.vercel.app/api/tasks/getAllTasks",{
                cache:"no-store",
                method:"GET"
            });
            const data=await response.json();
        // console.log(data);
        setIncompleteTasks(data);
        }
        const resetTaskForm=()=>{
            setTaskForm({
                task:"",
                priority:"",
                completion_Date:""
            })
        }
        const submitTask=async ()=>{
            try{
            const response=await fetch("https://to-do-seven-gold.vercel.app/api/tasks/addTask",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({taskForm,"create":true})
            });
            
            fetchData();
            toggleTaskForm();
            resetTaskForm()
        }
        catch(err)
        {
            console.error(err);
        }
        
        }

        const handleCompletion=async (e:any,id:number)=>{
            try{
                
                console.log(e.target.checked)
            const response=await fetch("https://to-do-seven-gold.vercel.app/api/tasks/markCompleted",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({id:id})
            });
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
        return (
            <>
            <div className="container w-[100vw]  h-[100vh]  flex flex-col  items-center mt-10 mb-4" >
            <h2 className="font-bold text-lg">Todays Tasks</h2>
            <div className="w-[50vw] m-4">
                {incompleteTasks && incompleteTasks.map((item:any,index)=>{
                    return(
                       <Task item={item} key={index} handleCompletion={handleCompletion} taskForm={taskForm} toggleTaskForm={toggleTaskForm} handleTaskForm={handleTaskForm}/>


                    );
                })}
                <button type="button" className="mt-4 flex flex-row justify-center items-center" onClick={()=>{
                toggleTaskForm()
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Add-1--Streamline-Core" height={14} width={14} ><desc>{"Add 1 Streamline Icon: https://streamlinehq.com"}</desc><g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math"><path id="Vector" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7 0.5v13" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M0.5 6.95996h13" strokeWidth={1} /></g></svg>
            <span className="ml-2">New Task</span>
                </button>
            </div>
        
        { showTaskForm && <form className="border-2 w-[50vw] p-2 flex flex-col mb-4">
            <div className="p-2">
                <input className="border-none outline-none" value={taskForm.task} type="text" name="task" id="task" placeholder="Task name" onChange={(e)=>{
                    handleTaskForm(e)
                }}/>
                </div>
                <div className="p-2" >
                <select value={taskForm.priority}  typeof="number" name="priority" id="priority"   onChange={(e)=>{
                    handleTaskForm(e)
                }} className="border-none outline-none">
                <option disabled selected value={""}>Priority</option>
                <option  value={1}>Priority 1</option>
                <option  value={2}>Priority 2</option>
                <option  value={3}>Priority 3</option>
                </select>
            
                <input value={taskForm.completion_Date} className="border-none outline-none ml-4" placeholder="Completion date" type="date" id="completion_Date" name="completion_Date"
                onChange={(e)=>{
                    handleTaskForm(e)
                }}/>
                </div>
                <div className="btn-section mt-2" >
                <button type="button" className="p-2 rounded" onClick={()=>{
                    submitTask()
                }}>Save</button>
                <button className="ml-4 bg-red-400 p-2  rounded" type="button" onClick={()=>{
                toggleTaskForm()
                }}>Close</button>
                </div>
            </form>
    }
            </div>
            </>
        
        )
    }
    export default Tasks;