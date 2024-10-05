
import { updateCompletionStatus } from "@/database/tasks";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
export async function POST(request:Request) {
    try {
        const session=await getServerSession();
        if(session?.user){
        const body=await request.json();
        const response=await updateCompletionStatus(body.id);
        return NextResponse.json(response);
        }
        else{
            return NextResponse.json({"error":"no user session"})
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}