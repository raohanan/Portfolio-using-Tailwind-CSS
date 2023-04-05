import {
  BsTwitter,
  BsGraphUpArrow,
  BsGithub,
  BsArrowUpRight,
} from "react-icons/bs";
export default function Page() {
  return (
    <>
      <div className="flex flex-col md:mx-auto max-w-3xl md:flex-row  mx-4  md:mt-32 font-serif">
        {/* Left section starts here */}
        <div className=" space-x-0 pr-10 mb-2 mt-2 md:mt-0">
          <img
            src="images/AH-logo.webp"
            className="mt-2 mb-6  h-16 w-16"
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
        <div className="text-neutral-200">
          <h1 className="font-bold my-5 text-3xl">Abdul Hanan</h1>
          <p>
            Hey, I'm Rao. I'm the member of Developer Experience at Panaverse
          </p>
          <p>where my team helps developers build a faster web.</p>
          <div className="my-6 flex flex-col md:flex-row">
            <img
              src="images/profile.jpg"
              alt="profile pic"
              className="rounded-full h-28 w-28"
            />
            <div className="flex flex-col my-auto pt-5 md:pt-0 md:mx-5 gap-2 text-gray-500 ">
              <a
                href={"https://twitter.com/AbdulHa09670288"}
                target="_blank"
                className="flex items-center gap-2 cursor-pointer"
              >
                {" "}
                <BsTwitter /> 7,189 tweets all time
              </a>
              <a
                href={"https://github.com/raohanan"}
                target="_blank"
                className="flex items-center gap-2 cursor-pointer"
              >
                {" "}
                <BsGithub />
                5,465 stars on this repo
              </a>
              <a
                href={"https://www.wix.com"}
                target="_blank"
                className="flex items-center gap-2 cursor-pointer"
              >
                {" "}
                <BsGraphUpArrow />
                1,660,849 blog views all time
              </a>
            </div>
          </div>
          <p className="my-6">
            I'm a Next.js developer and help contribute our open-source
            community Panaverse DAO. I'm passionate about frontend development
            and have created multiple sites on React, Next.js, and web
            development. I'm a student and contributer in early stage startup of
            Panaverse.
          </p>
          <ul className="flex flex-col md:flex-row gap-4 text-gray-500 ">
            <a
              href={"https://twitter.com/AbdulHa09670288"}
              target="_blank"
              className="flex items-center gap-1 hover:text-neutral-200 cursor-pointer"
            >
              <BsArrowUpRight />
              follow me on twitter
            </a>
            <a
              href={"https://ab.hanan01@gmail.com"}
              target="_blank"
              className="flex items-center gap-1 hover:text-neutral-200 cursor-pointer"
            >
              <BsArrowUpRight />
              get me email
            </a>
          </ul>
        </div>
        {/* Right section ends here */}
        <div className="h-36"></div>
      </div>
    </>
  );
}
