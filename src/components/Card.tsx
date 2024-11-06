import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  texto1: String;
  texto2: String;
};

function Card({ icon, texto1, texto2 }: Props) {
  return (
    <>
      <div className="hover:cursor-pointer mb-6 px-30 hover:scale-[1.1] bg-gradient-to-br bg-cyan-600 from-green-300 max-w-[600px] max-h-[400px] h-[660px] max-md:mx-2  shadow-lg rounded-xl border ">
        <div className="flex justify-center">
          <div className=" w-36 border shadow-xl items-center mt-7 rounded-full bg-white p-8 ">
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
