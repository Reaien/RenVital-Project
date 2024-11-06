type Props = {
  texto1?: string;
  Texto2?: string;
  img: string;
  tamaño?: String;

};

function HeroImage({texto1, img, Texto2, tamaño}: Props) {
  return (
    <>
      <section className="md:h-[600px]  md:flex md:justify-center">
        <div className="md:text-left text-center  md:text-4xl text-2xl  md:w-5/12 content-center">
          <p className="text-emerald-700 font-bold text-justify">
           {Texto2}
          </p>
          <p className="text-base md:w-10/12 italic text-justify">
            {texto1}
          </p>
        </div>

        <img className={`${tamaño}`} src={img} alt="" />
      </section>
    </>
  );
}

export default HeroImage;
