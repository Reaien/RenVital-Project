import { ReactNode } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {
  icon: ReactNode;
  texto1: String;
  texto2: String;
};

function Card({ icon, texto1, texto2 }: Props) {
  return (
    <>
      <div className="w-[400px] mb-6 px-6 bg-emerald-300/15 max-w-[400px] max-h-[360px] h-[360px]  shadow-lg rounded-xl border ">
        <div className="flex justify-center">
          <div className=" w-36 border shadow-xl items-center mt-7 rounded-full bg-white p-8">
            {icon}
          </div>
        </div>

        <div className="text-center mt-12 font-medium">
          <p>{texto1}</p>
          <div className="mt-5 flex  justify-center items-center gap-1">
            <p>{texto2}</p>
            <HiOutlineArrowNarrowRight className="hover:cursor-pointer w-6 h-6 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
