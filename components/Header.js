import Image from "next/image"
import {
    SearchIcon,PlusCircleIcon,UserGroupIcon,PaperAirplaneIcon,MenuIcon, HeartIcon
} from "@heroicons/react/outline";
import {HomeIcon}from "@heroicons/react/solid";
import { signOut,signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalatom";
function Header(){
    const { data:session,status}=useSession(); 
    const router=useRouter();
    const [open,setOpen]= useRecoilState(modalState);
    return(
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* left */}
                <div onClick={()=>router.push('/')} className="relative hidden sm:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
                    {/* https://i.ibb.co/xz0v0tH/Screenshot-2022-11-01-at-8-29-02-PM.png */}
                </div>
                <div onClick={()=>router.push('/')} className="relative w-10 sm:hidden flex-shrink-0 cursor-pointer">
                <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain"/>
                </div>
                {/* middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-1 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
                         focus:ring-black focus:border-black rounded-md" 
                        type="text" placeholder="search"/>
                    </div>
                </div>
                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={()=>router.push('/')} className="navbtn"/>
                    <MenuIcon className="h-6 w-6 md:hidden  cursor-pointer"/>
                    {session ? (
                        <>
                        <div className="relative navbtn">
                        <PaperAirplaneIcon className="navbtn rotate-45"/>
                            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 
                            rounded-full flex items-center justify-center animate-pulse text-white">
                                9+
                            </div>
                        </div>
                        <PlusCircleIcon onClick={()=> setOpen(true)} className="navbtn"/>
                        <UserGroupIcon className="navbtn"/>
                        <HeartIcon className="navbtn"/>
                        <img onClick={signOut} src={session.user.image} alt="display picture" 
                        className="h-10 w-10 rounded-lg cursor-pointer"/>
                    </>
                    ) : ( 
                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header