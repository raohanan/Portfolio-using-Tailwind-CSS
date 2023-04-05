import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex flex-col md:mx-auto max-w-3xl md:flex-row  mx-4  md:mt-32 font-serif">
        {/* Left section starts here */}
        <div className=" space-x-0 pr-10 mb-2 mt-2 md:mt-0">
          <img
            src="images/AH-logo.webp"
            className="mt-2 mb-6 h16 w-16"
            alt="AH logo"
          />
          <div className="flex flex-row md:flex-col">
            <a
              className="transition-all text-gray-500  hover:border-neutral-800 rounded-md hover:bg-neutral-900 hover:text-neutral-200 cursor-pointer flex align-middle font-bold"
              href="/"
            >
              <span className="relative py-[5px] px-[10px]">
                Home
                <div className="absolute insert-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"></div>
              </span>
            </a>
            <a
              className="transition-all text-gray-500  hover:border-neutral-800 rounded-md hover:bg-neutral-900 hover:text-neutral-200 cursor-pointer flex align-middle font-bold"
              href="/about"
            >
              <span className="relative py-[5px] px-[10px]">
                About
                <div className="absolute insert-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"></div>
              </span>
            </a>
            <a
              className="transition-all text-gray-500  hover:border-neutral-800 rounded-md hover:bg-neutral-900 hover:text-neutral-200 cursor-pointer flex align-middle font-bold"
              href="/portfolio"
            >
              <span className="relative py-[5px] px-[10px]">
                Portfolio
                <div className="absolute insert-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"></div>
              </span>
            </a>
            <a
              className="transition-all text-gray-500  hover:border-neutral-800 rounded-md hover:bg-neutral-900 hover:text-neutral-200 cursor-pointer flex align-middle font-bold"
              href="/contact"
            >
              <span className="relative py-[5px] px-[10px]">
                Contact
                <div className="absolute insert-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"></div>
              </span>
            </a>
          </div>
        </div>
        {/* Left section ends here */}

        {/* Right section starts here  */}

        <div className="flex flex-col ">
          <h1 className="font-serif text-neutral-200 font-bold my-6 text-3xl">
            Abdul Hanan
          </h1>
          <div className="font-serif text-neutral-400 text-center w-96 gap-8 grid grid-cols-2">
            <Link
              href={
                "https://panaverse-website-chakra-ui-hzt3-f8ph19zkl-raohanan.vercel.app/"
              }
              target="_blank"
            >
              <div className="border rounded-lg border-gray-600">
                <img
                  src="images/nextjs.png"
                  alt="Next-Js logo"
                  height={"10px"}
                />
                <h1 className="text-2xl text-neutral-400">Panaverse Dao</h1>
                <p className="text-neutral-600">
                  Made with Next.js 13 and Chakra UI
                </p>
              </div>
            </Link>
            <Link
              href={
                "https://panaverse-website-chakra-ui-hzt3-f8ph19zkl-raohanan.vercel.app/"
              }
              target="_blank"
            >
              <div className="border rounded-lg border-gray-600">
                <img src="images/nextjs.png" alt="Next-Js logo" />
                <h1 className="text-2xl text-neutral-400">PIAIC website</h1>
                <p className="text-neutral-600">
                  Made with Next.js 13 and Tailwind CSS
                </p>
              </div>
            </Link>
            <Link
              href={
                "https://panaverse-website-chakra-ui-hzt3-f8ph19zkl-raohanan.vercel.app/"
              }
              target="_blank"
            >
              <div className="border rounded-lg border-gray-600">
                <img src="images/nextjs.png" alt="Next-Js logo" />
                <h1 className="text-2xl text-neutral-400">Up work clone</h1>
                <p className="text-neutral-600">
                  Made with Next.js 13 and Tailwind CSS
                </p>
              </div>
            </Link>
            <Link
              href={
                "https://panaverse-website-chakra-ui-hzt3-f8ph19zkl-raohanan.vercel.app/"
              }
              target="_blank"
            >
              <div className="border rounded-lg border-gray-600">
                <img src="images/nextjs.png" alt="Next-Js logo" />
                <h1 className="text-2xl text-neutral-400">Resume website</h1>
                <p className="text-neutral-600">
                  Made with Next.js 13 and Tailwind CSS
                </p>
              </div>
            </Link>
          </div>
          {/* Right section ends here */}
        </div>
        <div className="h-36"></div>
      </div>
    </>
  );
};

export default page;
