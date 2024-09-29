
import { getAllTasks } from "@/database/tasks";
import { NextResponse } from "next/server";
export async function GET()
{
    try {
        const response=await getAllTasks();
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(error);
    }
}
export const revalidate = 0;