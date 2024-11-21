import NavBar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";
import BreakfastCard from "../components/Alimentacion/Desayuno";

import img from "../assets/images/breakfasticon.png"
import img1 from "../assets/images/Desayuno2.png"
import img2 from "../assets/images/Desayuno3.png"
import img3 from "../assets/images/Desayuno4.png"
type Props = {};

function Comunidad({}: Props) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center space-y-4">
        <BreakfastCard
          img={img} // Usas la imagen importada
          titulo="Desayuno 1"
          items={[
            "Avena cocida con agua o leche vegetal sin azúcar (almendra o coco), con rodajas de fresa y semillas de chía (fuente de fibra y antioxidantes).",
            "Pan integral bajo en sodio con aguacate.",
            "Infusión de hierbas o té verde sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img1} // Usas la imagen importada
          titulo="Desayuno 2"
          items={[
            "Yogur natural bajo en fósforo (sin aditivos) con rodajas de manzana y almendras en pequeñas cantidades.",
            "Tostada integral con tomate y un poco de aceite de oliva.",
            "Agua de coco natural o infusión de manzanilla.",
          ]}
        />
        <BreakfastCard
          img={img2} // Usas la imagen importada
          titulo="Desayuno 3"
          items={[
            "Huevos revueltos con espinacas frescas (cocinadas ligeramente con aceite de oliva).",
            "Pan integral bajo en sodio con una capa de queso fresco bajo en fósforo.",
            "Té verde o infusión de hierbas sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img3} // Usas la imagen importada
          titulo="Desayuno 4"
          items={[
            "Batido de frutas (fresas, arándanos y espinacas en pequeñas cantidades) con leche de almendras sin azúcar.",
            "Tostada integral con aguacate y un toque de limón.",
            "Infusión de jengibre o té de menta.",
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default Comunidad;
