import infoImage from "../assets/images/infoimage.png";

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

      <div className="grid grid-cols-2 ">
        <div className="text-left ">
          <p>
            Es un problema genético que provoca la aparición de muchos quistes
            llenos de líquido en los riñones, lo que afecta su capacidad para
            filtrar la sangre (principal función del riñón). Estos quistes
            pueden hacer que los riñones crezcan y, con el tiempo, causar
            insuficiencia renal.
          </p>
          <ul className="list-disc ml-10">
            <li> Enfermedad poliquística renal autosómica dominante (ADPKD)</li>
            <li> Enfermedad poliquística renal autosómica recesiva (ArPKD)</li>
          </ul>
        </div>
        <div className="justify-self-center">
          <img loading="lazy" src={infoImage} alt="infoimage" />
        </div>
      </div>
      <div className="flex"></div>
    </section>
  );
}

export default InfoSection;
