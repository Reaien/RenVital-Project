import { HiOutlineBookOpen } from "react-icons/hi";
import { PiBowlFood } from "react-icons/pi";
import { FaCommentMedical } from "react-icons/fa";

import Card from "../Global/Card";
import { Link } from "react-router-dom";
type Props = {};

function CardSection({}: Props) {
  return (
    <>
      <section className="lg:flex gap-16 justify-center grid">
        <Link to={"/info"}>
          <Card
            texto2={"Revisa aquí"}
            texto1={
              "Conoce a fondo sobre las enfermedades renales y ayuda a provenirlas"
            }
            icon={<HiOutlineBookOpen className="h-20 w-20 text-emerald-700" />}
          />
        </Link>

        <Card
          texto2={"Revisa aquí"}
          texto1={"Explora las opciones alimenticias para una vida saludable"}
          icon={<PiBowlFood className="h-20 w-20 text-emerald-700" />}
        />
        <Card
          texto2={"Revisa aquí"}
          texto1={"Preguntale a nuestros especialistas sobre dudas específicas"}
          icon={<FaCommentMedical className="h-20 w-20 text-emerald-700" />}
        />
      </section>
    </>
  );
}

export default CardSection;
