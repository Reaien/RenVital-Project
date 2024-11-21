import NavBar from "../components/Global/NavBar";

import BreakfastCard from "../components/Alimentacion/Desayuno";

import Footer from "../components/Global/Footer";

import img from "../assets/images/M1.png";
import img1 from "../assets/images/M2.png";
import img2 from "../assets/images/M3.png";
import img3 from "../assets/images/M4.jpg";

type Props = {};

function Comida({}: Props) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center space-y-4">
        <BreakfastCard
          img={img} // Usas la imagen importada
          titulo="Merienda 1"
          items={[
            "Rodajas de pepino con hummus bajo en sodio (hecho con garbanzos y aceite de oliva).",
            "Puñado pequeño de almendras (en cantidades controladas por el contenido de fósforo).",
            "Infusión de menta o manzanilla sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img1} // Usas la imagen importada
          titulo="Merienda 2"
          items={[
            "Yogur natural sin azúcar con un poco de miel (opcional) y fresas o moras frescas.",
            "Rodajas de zanahoria y apio con un toque de limón.",
            "Agua de coco natural.",
          ]}
        />
        <BreakfastCard
          img={img2} // Usas la imagen importada
          titulo="Merienda 3"
          items={[
            "Manzana verde con un puñado pequeño de nueces (en cantidades controladas).",
            "Tostada integral con aguacate.",
            "Té de jengibre o té verde sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img3} // Usas la imagen importada
          titulo="Merienda 4"
          items={[
            "Batido de arándanos y espinacas (en pequeña cantidad) con leche de almendras sin azúcar.",
            "Rodajas de pepino o zanahorias baby.",
            "Infusión de hierbas como manzanilla o tila.",
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default Comida;
