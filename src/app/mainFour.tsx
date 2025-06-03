import Image from "next/image";

export default function MainFour() {
  return (
    <div className="bg-black h-screen">
      <section className="text-neutral-700 dark:text-neutral-300">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-4xl font-bold text-green-300 2xl:text-7xl">Reviews</h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-2xl text-white 2xl:text-3xl">
            From everyday users to cybersecurity experts: our customers trust
            Flowly to protect their digital lives
          </p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3 my-40 2xl:text-3xl">
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image src="/Maria.png" alt="" width={100} height={100} />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold 2xl:text-3xl">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  Excellent, I have this VPN on all my devices - Phone, Laptop,
                  Tablet, TV, etc, and absolutely love it!!!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image src="/Lisa.png" alt="" width={100} height={100} />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold 2xl:text-3xl">Lisa Cudrow</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  Great VPN when you are travelling and need to access your home
                  country content. I use it all the time.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image src="/John.png" alt="" width={100} height={100} />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold 2xl:text-3xl">John Smith</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  It provides the best performance and security. I have been
                  using it for a while now and I am very satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
