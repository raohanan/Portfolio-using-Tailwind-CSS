import { FiArrowUpRight } from "react-icons/fi";

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
              className="transition-all text-gray-500 hover:text-neutral-200  hover:border-neutral-800 rounded-md hover:bg-neutral-900 cursor-pointer flex align-middle font-bold"
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
        <div className="flex flex-col">
          <h1 className=" font-serif text-neutral-200 font-bold my-6 text-3xl">
            Contact
          </h1>
          <form action="https://formspree.io/f/mknaqaog" method="POST">
            <div>
              <input
                required
                placeholder="Your Name"
                name="Name"
                className="p-2 w-80 bg-transparent rounded-md focus:outline-none text-neutral-200 border border-neutral-400 "
              />
            </div>
            <div className="my-5">
              <input
                required
                placeholder="Your Email"
                type="email"
                name="Email"
                className="p-2 w-80 bg-transparent rounded-md focus:outline-none text-neutral-200 border border-neutral-400 "
              />
            </div>
            <div>
              <textarea
              name="Message"
                rows={6}
                placeholder="Your Message"
                className="p-2 w-80 bg-transparent rounded-md focus:outline-none text-neutral-200 border border-neutral-400 "
              />
            </div>
            <button
              type="submit"
              className=" flex items-center gap-4 w-36 justify-between my-4 py-2 px-4 border text-neutral-200 hover:bg-neutral-900 duration-300 rounded-md border-gray-900"
            >
              Submit <FiArrowUpRight />
            </button>
          </form>
        </div>
        {/* Right section ends here */}
        <div className="h-36"></div>
      </div>
    </>
  );
};

export default page;
