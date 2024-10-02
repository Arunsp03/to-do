
"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Sidebar=()=>{
    
    const session=useSession();
    
     return(
        <>
        <div className="bg-[#F5F5F5] max-h-full w-52 ">
           
            <div className="flex flex-col justify-center items-start  mt-10">
            <ul className="text-black w-full ">
            <div className="m-2 p-2 border-none  border-r-2 flex flex-row justify-start items-center hover:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="User-Protection-2--Streamline-Core" height={16} width={16} ><desc>{"User Protection 2 Streamline Icon: https://streamlinehq.com"}</desc><g id="user-protection-2\xE2\x80\x94shield-secure-security-profile-person"><path id="Vector" fill="#d7e0ff" d="M7.36 13.43c-0.23168 0.0894 -0.48832 0.0894 -0.72 0 -1.80931 -0.7094 -3.36287 -1.9476 -4.45812 -3.553C1.08664 8.2716 0.500536 6.37342 0.5 4.43V1.5c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h11c0.2652 0 0.5196 0.105357 0.7071 0.292893 0.1875 0.187537 0.2929 0.441887 0.2929 0.707107v2.92c0.0015 1.94513 -0.5837 3.84549 -1.6791 5.45287C10.7256 11.4803 9.17089 12.7199 7.36 13.43Z" strokeWidth={1} /><path id="Intersect" fill="#ffffff" d="M2.83649 10.7304c1.02503 1.1926 2.32938 2.1216 3.8035 2.6996 0.23167 0.0894 0.48832 0.0894 0.72 0 1.47414 -0.578 2.77851 -1.507 3.80351 -2.6996C10.2673 9.38584 8.73708 8.5 6.99999 8.5c-1.7371 0 -3.26729 0.88584 -4.1635 2.2304Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7.36 13.43c-0.23168 0.0894 -0.48832 0.0894 -0.72 0v0c-1.80931 -0.7094 -3.36287 -1.9476 -4.45812 -3.553C1.08664 8.2716 0.500536 6.37342 0.5 4.43V1.5c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h11c0.2652 0 0.5196 0.105357 0.7071 0.292893 0.1875 0.187537 0.2929 0.441887 0.2929 0.707107v2.92c0.0015 1.94513 -0.5837 3.84549 -1.6791 5.45287C10.7256 11.4803 9.17089 12.7199 7.36 13.43v0Z" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M2.83649 10.7304C3.73269 9.38584 5.26289 8.5 6.99999 8.5c1.73709 0 3.26731 0.88583 4.16351 2.2304" strokeWidth={1} /><path id="Vector_4" fill="#ffffff" d="M7 7c1.24264 0 2.25 -1.00736 2.25 -2.25S8.24264 2.5 7 2.5 4.75 3.50736 4.75 4.75 5.75736 7 7 7Z" strokeWidth={1} /><path id="Vector_5" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7 7c1.24264 0 2.25 -1.00736 2.25 -2.25S8.24264 2.5 7 2.5 4.75 3.50736 4.75 4.75 5.75736 7 7 7Z" strokeWidth={1} /></g></svg>
                <div className="font-bold text-center ml-2" onClick={()=>{
                  
                    
                }}> {session.data?.user?.name}</div>
                </div>
                <li className={`m-2 p-2 border-none  border-r-2 flex flex-row justify-start items-center`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Magnifying-Glass--Streamline-Core" height={16} width={16} ><desc>{"Magnifying Glass Streamline Icon: https://streamlinehq.com"}</desc><g id="magnifying-glass--glass-search-magnifying"><path id="Vector" fill="#d7e0ff" d="M6 11.5a5.5 5.5 0 1 0 0 -11 5.5 5.5 0 0 0 0 11Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M6 11.5a5.5 5.5 0 1 0 0 -11 5.5 5.5 0 0 0 0 11Z" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5 10 10" strokeWidth={1} /></g></svg>
                 <span className="ml-2 font-bold">Search</span>
                    </li>
                <Link  href={"/today"} className={`m-2 p-2 border-none border-r-2 flex flex-row justify-start items-center hover:bg-slate-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Calendar-Edit--Streamline-Core" height={16} width={16} ><desc>{"Calendar Edit Streamline Icon: https://streamlinehq.com"}</desc><g id="calendar-edit--calendar-date-day-compose-edit-note"><path id="Vector" fill="#d7e0ff" d="M1.5 2a1 1 0 0 0 -1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1 -1V3a1 1 0 0 0 -1 -1h-11Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M1.5 2a1 1 0 0 0 -1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1 -1V3a1 1 0 0 0 -1 -1h-2" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 0.5v3" strokeWidth={1} /><path id="Vector_4" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10.5 0.5v3" strokeWidth={1} /><path id="Vector_5" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 2h5" strokeWidth={1} /><path id="Vector_6" fill="#ffffff" d="m10 6.864 -4.132 4.132L4 11.25l0.263 -1.868L8.386 5.25 10 6.864Z" strokeWidth={1} /><path id="Vector_7" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="m10 6.864 -4.132 4.132L4 11.25l0.263 -1.868L8.386 5.25 10 6.864Z" strokeWidth={1} /></g></svg>
                <span className="ml-2 font-bold" > Today</span>    
                </Link>
                <Link href={"/upcoming"} className={`m-2 p-2 border-none  border-r-2 flex flex-row justify-start items-center hover:bg-slate-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Calendar-Add--Streamline-Core" height={16} width={16} ><desc>{"Calendar Add Streamline Icon: https://streamlinehq.com"}</desc><g id="calendar-add--add-calendar-date-day-month"><g id="Vector"><path fill="#d7e0ff" d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-11Z" strokeWidth={1} /></g><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-2" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 0.5v3" strokeWidth={1} /><path id="Vector_4" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10.5 0.5v3" strokeWidth={1} /><path id="Vector_5" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 2h5" strokeWidth={1} /><path id="Vector_6" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 8h-5" strokeWidth={1} /><path id="Vector_7" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7 5.5v5" strokeWidth={1} /></g></svg>
                <span className="ml-2 font-bold" >Upcoming</span>    
                </Link>
                <div className="m-2 p-2 border-none  border-r-2 flex flex-row justify-start items-center hover:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Login-1--Streamline-Core" height={16} width={16} ><desc>{"Login 1 Streamline Icon: https://streamlinehq.com"}</desc><g id="login-1--arrow-enter-frame-left-login-point-rectangle"><path id="Vector" fill="#d7e0ff" d="M9.5 12.5c0 0.2652 -0.10536 0.5196 -0.29289 0.7071 -0.18754 0.1875 -0.44189 0.2929 -0.70711 0.2929h-7c-0.26522 0 -0.51957 -0.1054 -0.707107 -0.2929C0.605357 13.0196 0.5 12.7652 0.5 12.5v-11c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h7c0.26522 0 0.51957 0.105357 0.70711 0.292893C9.39464 0.98043 9.5 1.23478 9.5 1.5v11Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 10.5v2c0 0.2652 -0.10536 0.5196 -0.29289 0.7071 -0.18754 0.1875 -0.44189 0.2929 -0.70711 0.2929h-7c-0.26522 0 -0.51957 -0.1054 -0.707107 -0.2929C0.605357 13.0196 0.5 12.7652 0.5 12.5v-11c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h7c0.26522 0 0.51957 0.105357 0.70711 0.292893C9.39464 0.98043 9.5 1.23478 9.5 1.5v2" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M13.5 7h-8" strokeWidth={1} /><path id="Vector_4" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="m7.5 5 -2 2 2 2" strokeWidth={1} /></g></svg>
                <button className="font-bold text-center ml-2" onClick={()=>{
                    signOut();
                  
                }}>Signout</button>
                </div>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar;