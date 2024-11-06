import { MdEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { FaPlateWheat } from "react-icons/fa6";
import Card from "../Card";
import { Link } from "react-router-dom";

type Props = {};

function Comidas({}: Props) {
  return (
    <>
      <section className="lg:flex gap-10 justify-center grid p-3">
        <Link to={"/Desayuno"}>
          <Card
            texto2={"Desayuno ->"}
            texto1={
              "Comienza el día con un desayuno nutritivo, equilibrado y diseñado para tus objetivos de salud."
            }
            icon={
              <MdEmojiFoodBeverage className="h-20 w-20 text-emerald-700" />
            }
          />
        </Link>
        <Link to={"/info"}>
          <Card
            texto2={"Snack ->"}
            texto1={
              "Elige nutritivos snacks de media mañana para reponer energía y mantener tu salud durante el día."
            }
            icon={<FaPlateWheat className="h-20 w-20 text-emerald-700" />}
          />
        </Link>
        <Link to={"/info"}>
          <Card
            texto2={"Almuerzo ->"}
            texto1={
              "Disfruta de un almuerzo equilibrado, delicioso y nutritivo para revitalizar tu cuerpo y mente."
            }
            icon={<PiBowlFood className="h-20 w-20 text-emerald-700" />}
          />
        </Link>
        <Card
          texto2={"Merienda ->"}
          texto1={
            "Disfruta de una merienda saludable y deliciosa, perfecta para reponer energías y mantenerte activo."
          }
          icon={<GiFruitBowl className="h-20 w-20 text-emerald-700" />}
        />
        <Card
          texto2={"Cena ->"}
          texto1={
            "Culmina tu día con una cena nutritiva y sabrosa, diseñada para tu bienestar y satisfacción."
          }
          icon={
            <MdOutlineDinnerDining className="h-20 w-20 text-emerald-700" />
          }
        />
      </section>
    </>
  );
}

export default Comidas;
