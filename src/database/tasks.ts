"use server"
import Task from '@/models/taskInterface';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function getAllTasks() {
    try{
const allUsers = await prisma.tasks.findMany(
  {
    where:{
      completion_Status:0
    }
  }
)
  return allUsers;
    }
    catch(err){
        console.error(err);
    }
  }

export async function getTodaysTasks()
{
  try {
    const today = new Date().toISOString().split("T")[0]
    console.log("todays date",today);
    const todaysTasks = await prisma.tasks.findMany({
      where:{
        completion_Date:{
          equals:today
        },
        completion_Status:{
          equals:0
        }
      }
    });
    return todaysTasks;
  } catch (error) {
    console.error(error)
  }
}

export async function addTask(data:Task){
  try{
    console.log("completion data",typeof(data.completion_Date));
   const task={
    "task":data.task,
    "priority":Number(data.priority),
    "completion_Date":data.completion_Date.toString()
   }
  const response=await prisma.tasks.create({data:task});
  return response;
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function updateCompletionStatus(id:number)
{
  try {
    const updateTask = await prisma.tasks.update({
      where: {
        id: id,
      },
      data: {
        completion_Status:1,
      },
    })
    return updateTask;
  } catch (error) {
    console.error(error)
  }
}

export async function editTask(id:number,task:Task)
{
  try {
    const updateTask=await prisma.tasks.update({
      where:{
        id:id
      },
      data:{
        task:task.task,
        completion_Date:task.completion_Date,
        priority:Number(task.priority)
      }
    })
    return updateTask;
  } catch (err) {
    console.error(err);
  }
}
