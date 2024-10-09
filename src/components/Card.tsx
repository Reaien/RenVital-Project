import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  texto1: String;
  texto2: String;
};

function Card({ icon, texto1, texto2 }: Props) {
  return (
    <>
      <div className="hover:cursor-pointer mb-6 px-6 bg-emerald-300/15 max-w-[400px] max-h-[360px] h-[360px] max-md:mx-2  shadow-lg rounded-xl border ">
        <div className="flex justify-center">
          <div className=" w-36 border shadow-xl items-center mt-7 rounded-full bg-white p-8">
            {icon}
          </div>
        </div>

        <div className="text-center mt-12 font-medium">
          <p>{texto1}</p>
          <div className="mt-5 flex  justify-center items-center gap-1">
            <p>{texto2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
