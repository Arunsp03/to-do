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