'use client'
import Link from "next/link";
import confetti from "canvas-confetti";

export default function Header() {
    const shootConfetti = () => {
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 500);
  };
    return (
        <div className="flex items-center justify-between bg-white p-10 py-5 rounded-xl my-5 sticky top-0 z-50 shadow-lg">
            <Link
            href="/"
            className="text-4xl font-bold text-black hover:opacity-80 -mx-10 sm:mx-4"
            >Flowly</Link>
            <div>
            <h1 className="text-xl text-black">
                <button onClick={shootConfetti}><Link href="/download" className="animate-pulse mx-20 sm:mx-0">Download</Link></button>
                <Link href="/" className="mx-20">Contact</Link>
            </h1>
            </div>
        </div>
    )
}