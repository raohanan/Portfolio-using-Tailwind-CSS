import Link from "next/link";
import Button from "../../components/Button ";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-auto max-w-3xl   mx-4  md:mt-32 font-serif">
      {/* Left section starts here */}
      <div className=" space-x-0 pr-10 mb-2 mt-2 md:mt-0">
        <img
          src="images/AH-logo.webp"
          className="mt-2 mb-6 h-16 w-16"
          alt="AH logo"
        />
        <div className="flex flex-row md:flex-col">
          <a
            className="transition-all text-gray-500 hover:text-neutral-200 hover:border-neutral-800 rounded-md hover:bg-neutral-900  cursor-pointer flex align-middle font-bold"
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
      <div className=" font-serif text-neutral-200">
        <h1 className=" font-semibold my-5 font-serif text-3xl">About Me</h1>
        <p className="mb-5">
          Hey, I'm Rao. Most folks know me as <b>Honey</b> online.
        </p>
        <p>
          I'm currently the
          <b> student of Developer Experience at Panaverse DAO</b>, where I code
          with my fellow Developers team. I focus on my coding skills by
          <b className="text-neutral-200"> contribute and growing</b> the
          Panaverse with Next.js front-end frame work.
        </p>
        <hr className="my-16"></hr>
        <p className="mb-6">
          I'm passionate about many creative pursuits, including music,
          photography, videography, and of course, coding. This combination of
          interests is what ultimately led me to my current role in building
          multiple websites using latest technologies.
        </p>
        <p className="mb-6">
          I <b>love</b> building for the web. From something as simple as a
          single HTML file – all the way to large Next.js applications. The web
          is incredible. Anyone can become a developer, writer, or creator – and
          no one has to ask for permission. You can just build.
        </p>
        <p className="mb-6">
          Outside of Panaverse, I personally want to <b>angel invest</b> in
          developer comunities and <b>contribute early-stage startups</b>.I also
          do Developer Relations consulting work, helping comunities take their
          DevRel function from 0 to 1, or provide guidance on growing
          communities, content creation, and developer marketing.
        </p>
        <div className="flex flex-col md:flex-row mt-10 mb-40">
          <div className="md:mx-1">
            <Link href={"https://twitter.com/AbdulHa09670288"} target="_blank">
              <Button text="Twitter" icons={<BsTwitter />} />
            </Link>
          </div>
          <div className="md:mx-1">
            <Link href={"https://github.com/raohanan"} target="_blank">
              <Button text="Github" icons={<BsGithub />} />
            </Link>
          </div>
          <div className="md:mx-1">
            <Link
              href={"https://www.linkedin.com/in/abdul-hanan-17b69623a"}
              target="_blank"
            >
              <Button text="LinkedIN" icons={<BsLinkedin />} />
            </Link>
          </div>
        </div>
      </div>
      {/* Right section ends here */}
    </div>
  );
};

export default page;
