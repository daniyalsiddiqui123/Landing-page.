import Image from "next/image";
import Link from "next/link";
import { MdVerifiedUser } from "react-icons/md";

export default function Main () {
    return (
        <div className="bg-white sm:h-screen h-[900px] ">
            <h1 className="text-5xl 2xl:text-9xl text-black font-bold p-10 2xl:p-40">The VPN You Need!</h1>
            <p className="text-2xl 2xl:text-5xl text-black font-sans p-10 -my-10 sm:-my-12 2xl:p-40">Connect Multiple Devices On A Single Plan. And It&apos;s FREE!</p>
            <Link href='/download'><button className="border-8 border-red-400 rounded-4xl bg-red-400 cursor-pointer mx-10 text-white font-bold py-2 2xl:p-16 text-xl 2xl:text-3xl my-20 2xl:mx-40">Download The No 1 VPN</button></Link>
            <p className="flex items-center text-xl 2xl:text-4xl text-black p-0 sm:p-10 -my-16 sm:my-0"><MdVerifiedUser className="mr-2 text-2xl 2xl:text-4xl 2xl:mx-20" />Trusted By Many!</p>
            <Image src='/vpn.png' alt="vpn" width={1024} height={800} className="my-24 sm:my- md:-my-[450px] md:mx-32 p-1 md:p-[200px] 2xl:p-[100px] 2xl:mx-[1500px]"></Image>
        </div>
    )
}