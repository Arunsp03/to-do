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
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));  // Start of today
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // End of today
    const todaysTasks = await prisma.tasks.findMany({
      where:{
        completion_Date:{
          gte: startOfDay,  // Greater than or equal to start of day
          lte: endOfDay     // Less than or equal to end of day
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
   const task={
    "task":data.task,
    "priority":Number(data.priority),
    "completion_Date":new Date(data.completion_Date).toISOString()
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
