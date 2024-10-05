
import { getAllTasks } from "@/database/tasks";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function POST(request:Request)
{
    try {
        const session=await getServerSession(authOptions);
        // console.log(session);
        const body = await request.json(); // Parse the body of the request
        if(session?.user){
        //console.log(body); 
        const response=await getAllTasks(session?.user?.name as string);
        return NextResponse.json(response);
        }
        else{
            return NextResponse.json({"error":"no user session"})
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}
export const revalidate = 0;