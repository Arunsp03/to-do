
import { updateCompletionStatus } from "@/database/tasks";
import { NextResponse } from "next/server";
export async function POST(request:Request) {
    try {
        const body=await request.json();
        const response=await updateCompletionStatus(body.id);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(error);
    }
}