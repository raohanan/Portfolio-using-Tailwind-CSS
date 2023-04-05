import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Button: FC<{
  text: string;
  icons: React.ReactNode;
}> = ({ text, icons }) => {
  return (
    <button className=" m-2 w-full justify-between p-4 border text-neutral-200 hover:bg-neutral-950 duration-300 rounded-md border-gray-900">
      <div className="flex transition-all gap-3  items-center">
        {icons}
        {text}
        <div className="ml-auto">
          <FiArrowUpRight />
        </div>
      </div>
    </button>
  );
};

export default Button;
