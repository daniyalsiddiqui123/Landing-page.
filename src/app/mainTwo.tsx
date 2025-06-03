import { GoDot } from "react-icons/go";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import Link from "next/link";

export default function MainTwo() {
    return (
        <div className="bg-gray-100 h-full">
            <h1 className="text-black font-bold text-center text-5xl p-10 sm:p-20 2xl:text-8xl">One VPN. 360° Protection.</h1>
            <p className="text-xl text-black p-10 flex items-center py-5 2xl:text-5xl"><GoDot />One-click setup on any device: get protected instantly</p>
            <p className="text-xl text-black p-10 flex items-center py-5 2xl:text-5xl"><GoDot />Seamlessly switch between devices without interruptions</p>
            <p className="text-xl text-black p-10 flex items-center py-5 2xl:text-5xl"><GoDot />Secure up to 8 devices with a single click</p>
            <img src="/vpnmain.png" alt="VPN Main" className="mx-80 md:mx-1 -my-60 md:my-1 rounded-lg px-80 md:px-40 2xl:mx-[500px]"></img>
            <p className="text-5xl text-black flex items-center space-x-24 my-64 mx-10 2xl:text-8xl 2xl:space-x-52 xl:text-5xl xl:space-x-32"><FaWindows /><FaApple /><SiMacos /><FaLinux /><FaAndroid /><FaChrome /><FaFirefox /><FaEdge /><CiCircleMore /></p>
            <div className="flex justify-center items-center -my-16 sm:-my-40">
            <Link href='/download'><button className="text-2xl md:-my-40 text-white border-none rounded-4xl bg-red-400 shadow-xl p-5 font-bold cursor-pointer text-center hover:bg-green-500 duration-400 2xl:p-16 2xl:text-5xl 2xl:my-10">Download Now For Free</button></Link>
            </div>
            <p className="h-80">.</p>
        </div>
    )
}