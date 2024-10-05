import { NextResponse } from 'next/server';
import { getTodaysTasks } from '@/database/tasks';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
export async function POST(request:Request){

    try {
        const session=await getServerSession(authOptions);
      //  console.log(session);
        const body = await request.json(); // Parse the body of the request
      //  console.log(body.user); 
      if(session?.user){
        const results=await getTodaysTasks(session?.user?.name as string);
        return NextResponse.json(results);
      }
      else{
        return NextResponse.json({"error":"no user session"})
      }
    } catch (error) {
        return NextResponse.json(error);    
    }

}
export const revalidate = 0;

