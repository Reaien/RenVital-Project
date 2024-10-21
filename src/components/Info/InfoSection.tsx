import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import infoImage from "../../assets/images/infoimage.png";
import InfoBox from "./InfoBox";
import { Link } from "react-router-dom";

type Props = {};

function InfoSection({}: Props) {
  return (
    <section className="my-20">
      <div className="mb-10">
        <p className="text-center  text-emerald-700 text-2xl md:text-6xl font-semibold">
          Enfermedad Renal Poliquística
        </p>
        <p className="italic text-lg text-center mt-2">
          Conoce a fondo sobre las enfermedades renales y previene
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-3 ">
        <div className="lg:text-right text-center col-span-2">
          <p className="lg:pl-56">
            Es un problema genético que provoca la aparición de muchos quistes
            llenos de líquido en los riñones, lo que afecta su capacidad para
            filtrar la sangre (principal función del riñón). Estos quistes
            pueden hacer que los riñones crezcan y, con el tiempo, causar
            insuficiencia renal.
          </p>
          <p className="mt-14 list-disc max-md:mb-5 md:ml-10">
            <li> Enfermedad poliquística renal autosómica dominante (ADPKD)</li>
            <li> Enfermedad poliquística renal autosómica recesiva (ArPKD)</li>
          </p>
        </div>
        <div className="lg:justify-self-center max-lg:flex max-lg:justify-center max-lg:mt-5">
          <img loading="lazy" src={infoImage} alt="infoimage" />
        </div>
      </div>
      <div className="2xl:flex max-xl:grid max-xl:justify-center items-center lg:ml-32 lg:-mt-40">
        <InfoBox
          cardSintoma={true}
          titulo={"Síntomas"}
          item1={"Sangre en orina"}
          item2={"Dolor en costado que se extiende"}
          item3={"Piedras en el riñon"}
          item4={"Riñones que se pueden sentir al tacto"}
          item5={"Infecciones de las vías urinarias"}
          item6={"Malestar general"}
        />
        <InfoBox
          cardSintoma={false}
          titulo={"Complicaciones"}
          item1={"Enfermedad renal cronica"}
          item2={"Aneurisma cerebral"}
          item3={"Hipertensión"}
          item4={"Cálculos renales"}
        />
        <Link
          to={"/info"}
          className="font-bold text-emerald-700 flex hover:cursor-pointer"
        >
          <p>Explora mas aquí</p>
          <HiOutlineArrowNarrowRight className=" w-6 h-6 " />
        </Link>
      </div>
    </section>
  );
}

export default InfoSection;
