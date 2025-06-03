import Link from "next/link";
import { MdVerifiedUser } from "react-icons/md";

export default function Main () {
    return (
        <div className="bg-white h-screen">
            <h1 className="text-5xl 2xl:text-9xl text-black font-bold p-10">The VPN You Need!</h1>
            <p className="text-2xl 2xl:text-5xl text-black font-sans p-10 -my-12">Connect Multiple Devices On A Single Plan. And It's FREE!</p>
            <Link href='/download'><button className="border-8 border-red-400 rounded-4xl bg-red-400 cursor-pointer mx-10 text-white font-bold py-2 2xl:p-16 text-xl 2xl:text-3xl my-20">Download The No.1 VPN</button></Link>
            <p className="flex items-center text-xl 2xl:text-4xl text-black p-0 sm:p-10 -my-16 sm:my-0"><MdVerifiedUser className="mr-2 text-2xl 2xl:text-4xl" />Trusted By Many!</p>
            <img src='/vpn.png' className="mx-80 2xl:object-right 2xl:mx-[900px] -my-[300px] rounded-lg px-80 md:px-64 md:mx-36"></img>
        </div>
    )
}