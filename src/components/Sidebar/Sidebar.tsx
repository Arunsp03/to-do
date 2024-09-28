"use client"

import Link from "next/link";


const Sidebar=()=>{
    return(
        <>
        <div className="bg-[#F5F5F5] max-h-full w-52 ">
            <div className="flex flex-col justify-center items-start  mt-10">
            <ul className="text-black w-full ">
                <li className={`m-2 p-2 border-none  border-r-2 flex flex-row justify-start items-center`} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Magnifying-Glass--Streamline-Core" height={16} width={16} ><desc>{"Magnifying Glass Streamline Icon: https://streamlinehq.com"}</desc><g id="magnifying-glass--glass-search-magnifying"><path id="Vector" fill="#d7e0ff" d="M6 11.5a5.5 5.5 0 1 0 0 -11 5.5 5.5 0 0 0 0 11Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M6 11.5a5.5 5.5 0 1 0 0 -11 5.5 5.5 0 0 0 0 11Z" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5 10 10" strokeWidth={1} /></g></svg>
                 <span className="ml-2">Search</span>
                    </li>
                <Link  href={"/today"} className={`m-2 p-2 border-none border-r-2 flex flex-row justify-start items-center hover:bg-slate-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Calendar-Edit--Streamline-Core" height={16} width={16} ><desc>{"Calendar Edit Streamline Icon: https://streamlinehq.com"}</desc><g id="calendar-edit--calendar-date-day-compose-edit-note"><path id="Vector" fill="#d7e0ff" d="M1.5 2a1 1 0 0 0 -1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1 -1V3a1 1 0 0 0 -1 -1h-11Z" strokeWidth={1} /><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M1.5 2a1 1 0 0 0 -1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1 -1V3a1 1 0 0 0 -1 -1h-2" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 0.5v3" strokeWidth={1} /><path id="Vector_4" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10.5 0.5v3" strokeWidth={1} /><path id="Vector_5" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 2h5" strokeWidth={1} /><path id="Vector_6" fill="#ffffff" d="m10 6.864 -4.132 4.132L4 11.25l0.263 -1.868L8.386 5.25 10 6.864Z" strokeWidth={1} /><path id="Vector_7" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="m10 6.864 -4.132 4.132L4 11.25l0.263 -1.868L8.386 5.25 10 6.864Z" strokeWidth={1} /></g></svg>
                <span className="ml-2" > Today</span>    
                </Link>
                <Link href={"/upcoming"} className={`m-2 p-2 border-none  border-r-2 flex flex-row justify-start items-center hover:bg-slate-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Calendar-Add--Streamline-Core" height={16} width={16} ><desc>{"Calendar Add Streamline Icon: https://streamlinehq.com"}</desc><g id="calendar-add--add-calendar-date-day-month"><g id="Vector"><path fill="#d7e0ff" d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-11Z" strokeWidth={1} /></g><path id="Vector_2" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-2" strokeWidth={1} /><path id="Vector_3" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 0.5v3" strokeWidth={1} /><path id="Vector_4" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10.5 0.5v3" strokeWidth={1} /><path id="Vector_5" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 2h5" strokeWidth={1} /><path id="Vector_6" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 8h-5" strokeWidth={1} /><path id="Vector_7" stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M7 5.5v5" strokeWidth={1} /></g></svg>
                <span className="ml-2" >Upcoming</span>    
                </Link>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar;