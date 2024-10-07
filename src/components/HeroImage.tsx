import HeroPhoto from "../assets/images/banner.jpg";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <>
      <section className="md:h-[600px]  md:flex md:justify-center">
        <div className="md:text-left text-center  md:text-4xl text-2xl  md:w-5/12 content-center">
          <p className="text-emerald-700 font-bold">
            Cuidamos de tu salud renal: Información confiable, planes
            alimenticios y apoyo médico a un clic de distancia.
          </p>
          <p className="text-base md:w-10/12 italic">
            Explora recursos actualizados, consejos médicos y herramientas
            interactivas diseñadas para acompañarte en el manejo de tu salud
            renal. Estamos aquí para ayudarte a tomar decisiones informadas y
            mejorar tu calidad de vida.
          </p>
        </div>

        <img className="md:ml-32" src={HeroPhoto} alt="" />
      </section>
    </>
  );
};

export default HeroImage;
