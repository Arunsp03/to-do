"use server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function getAllTasks() {
    try{
const allUsers = await prisma.tasks.findMany()
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
    console.log(today);
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

export async function addTask(data:{"task":string,"priority":string,"completion_Date":string}){
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
    const updateUser = await prisma.tasks.update({
      where: {
        id: id,
      },
      data: {
        completion_Status:1,
      },
    })
    return updateUser;
  } catch (error) {
    console.error(error)
  }
}
