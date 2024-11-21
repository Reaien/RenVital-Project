import NavBar from "../components/Global/NavBar";

import BreakfastCard from "../components/Alimentacion/Desayuno";

import Footer from "../components/Global/Footer";

import img from "../assets/images/S1.jpg";
import img1 from "../assets/images/S2.jpg";
import img2 from "../assets/images/S3.png";
import img3 from "../assets/images/S4.jpg";


type Props = {};

function Comida({}: Props) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center space-y-4">
        <BreakfastCard
          img={img} // Usas la imagen importada
          titulo="Snack 1"
          items={[
            "Rodajas de pepino con un toque de limón y un poco de aceite de oliva.",
            "Puñado pequeño de almendras (en cantidades controladas debido al contenido de fósforo).",
            "Té verde sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img1} // Usas la imagen importada
          titulo="Snack 2"
          items={[
            "Tostadas integrales bajas en sodio con aguacate y rodajas de tomate.",
            "Rodajas de zanahoria o apio con un poco de limón.",
            "Agua natural o infusión de hierbaluisa.",
          ]}
        />
        <BreakfastCard
          img={img2} // Usas la imagen importada
          titulo="Snack 3"
          items={[
            "Manzana verde o pera con un puñado pequeño de nueces (en porciones limitadas).",
            "Yogur natural sin azúcar (bajo en fósforo).",
            "Infusión de manzanilla.",
          ]}
        />
        <BreakfastCard
          img={img3} // Usas la imagen importada
          titulo="Snack 4"
          items={[
            "Batido pequeño de fresas o moras con leche de almendras sin azúcar.",
            "Puñado de semillas de chía o girasol (en pequeña cantidad).",
            "Infusión de menta sin azúcar.",
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default Comida;
