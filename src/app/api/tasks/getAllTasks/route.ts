
import { getAllTasks } from "@/database/tasks";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function POST(request:Request)
{
    try {
        const session=await getServerSession(authOptions);
        console.log(session);
        const body = await request.json(); // Parse the body of the request
        console.log(body); 
        const response=await getAllTasks(body.user||session?.user?.name);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(error);
    }
}
export const revalidate = 0;