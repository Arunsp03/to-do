import { NextResponse } from 'next/server';
import { getTodaysTasks } from '@/database/tasks';
export async function GET(){
    try {
      //  console.log("hit")
        const results=await getTodaysTasks();
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(error);
    }

}
export const revalidate = 0;