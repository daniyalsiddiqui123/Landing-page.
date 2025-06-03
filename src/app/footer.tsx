import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-blue-950 h-screen sm:h-56 md:h-72 2xl:h-[600px]">
            <h1 className="p-20 sm:p-10 2xl:text-3xl">© 2025 Flowly. All rights reserved.</h1>
            <div className="flex-wrap items-center space-x-20 sm:text-right mx-5 sm:mx-10 md:text-left md:flex -my-32 md:-my-20 p-16 2xl:-mx-7 2xl:my-0.5">
                <Link href='/'><button className="cursor-pointer hover:text-green-400 2xl:text-3xl">Privacy Policy</button></Link>
                <Link href='/'><button className="cursor-pointer hover:text-green-400 2xl:text-3xl">Terms of Service</button></Link>
                <Link href='/'><button className="cursor-pointer hover:text-green-400 2xl:text-3xl">Cookie Preferences </button></Link>
            </div>
            <div>
                <div className="flex text-left space-x-10 text-2xl p-10 my-20 lg: 2xl:text-3xl">
                    <Link href='/'><FaYoutube className="cursor-pointer hover:text-red-500" /></Link>
                    <Link href='/'><FaSquareXTwitter className="cursor-pointer hover:text-blue-500" /></Link>
                    <Link href='/'><FaFacebook className="cursor-pointer hover:text-blue-700" /></Link>
                    <Link href='/'><FaSquareInstagram className="cursor-pointer hover:text-pink-500" /></Link>
                </div>
            </div>
        </div>
    )
}