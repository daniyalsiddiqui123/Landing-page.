import Link from "next/link";

export default function MainThree() {
  return (
    <div className="bg-white h-full">
      <h1 className="text-5xl text-black text-center p-14 font-bold 2xl:text-7xl">
        From Download To Protection - Set Up in 90 Seconds
      </h1>
      <p className="text-2xl text-black text-center 2xl:text-4xl">
        No complex configurations. No tech skills needed. Just install, tap
        connect, and you’re
      </p>
      <p className="text-2xl text-black text-center 2xl:text-4xl">instantly protected</p>
      <div className="flex justify-between flex-wrap gap-6 px-20 sm:px-8 py-10 text-black my-20 2xl:text-4xl">
        <div className="text-center">
          <h2 className="font-bold text-3xl 2xl:text-5xl">Download & Install</h2>
          <p>Available on all devices</p>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-3xl 2xl:text-5xl">One-Tap Connect</h2>
          <p>Instant encryption - no manual setup</p>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-3xl 2xl:text-5xl">Stay Private & Secure</h2>
          <p>Auto-connect with 24/7 protection</p>
        </div>
      </div>
      <div className="flex justify-center items-center -my-40">
        <Link href='/download'><button className="cursor-pointer border-none bg-red-500 rounded-4xl p-5 text-2xl font-bold hover:bg-green-500 duration-400 my-40 2xl:p-16 2xl:text-4xl">Download Now</button></Link>
      </div>
      <div className="flex justify-center items-center my-5 text-black text-xl 2xl:text-3xl">
        <p>24/7 customer support via Email</p>
      </div>
    </div>
  );
}
