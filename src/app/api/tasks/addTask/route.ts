import { NextResponse } from 'next/server';
import { addTask } from '@/database/tasks';
export async function POST(request: Request ) {
    try {
        const body = await request.json(); // Parse the body of the request
        console.log(body); 
        if(body.create){
        const response=await addTask(body.taskForm);
        return NextResponse.json(response)
        }
    console.log("else");  
    return NextResponse.json({"update":"need to update"})
        
    } catch (error) {
        return NextResponse.json(error);
    }
}