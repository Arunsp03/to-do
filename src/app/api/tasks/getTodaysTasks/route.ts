import { NextResponse } from 'next/server';
import { getTodaysTasks } from '@/database/tasks';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
export async function POST(request:Request){

    try {
        const session=await getServerSession(authOptions);
        console.log(session);
        const body = await request.json(); // Parse the body of the request
        console.log(body.user); 
        const results=await getTodaysTasks(body.user||session?.user?.name);
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(error);    
    }

}
export const revalidate = 0;

