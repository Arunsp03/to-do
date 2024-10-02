import { NextResponse } from 'next/server';
import { addTask, editTask } from '@/database/tasks';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
export async function POST(request: Request ) {
    try {
        const session=await getServerSession(authOptions);
        console.log(session);
        const body = await request.json(); // Parse the body of the request
        console.log(body); 
        if(body.create){
        const response=await addTask(body.taskForm,body.user||session?.user?.name);
        return NextResponse.json(response)
        }
    else{
        console.log("in edit mode",body.taskForm)
        const response=await editTask(body.id,body.taskForm);
        return NextResponse.json(response)
    }
   
        
    } catch (error) {
        return NextResponse.json(error);
    }
}