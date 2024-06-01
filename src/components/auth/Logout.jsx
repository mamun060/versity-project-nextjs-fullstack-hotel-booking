"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
    return (
        <button 
            className=" bg-red-700 px-2 py-1 shadow-sm rounded-[5px] text-white font-semibold "
            onClick={
                ()=> {signOut({ callbackUrl: "http://localhost:3000/login"})}
            }
        >
            Sign Out
        </button>
    );
}
 
export default Logout;