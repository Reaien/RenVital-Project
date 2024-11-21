import NavBar from "../components/Global/NavBar";

import BreakfastCard from "../components/Alimentacion/Desayuno";

import Footer from "../components/Global/Footer";

import img from "../assets/images/C1.jpg";
import img1 from "../assets/images/C2.jpg";
import img2 from "../assets/images/C3.jpg";
import img3 from "../assets/images/C4.jpg";

type Props = {};

function Comida({}: Props) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center space-y-4">
        <BreakfastCard
          img={img} // Usas la imagen importada
          titulo="Cena 1"
          items={[
            "Pechuga de pollo a la plancha con hierbas (romero, tomillo) y un toque de aceite de oliva.",
            "Ensalada de lechuga, pepino, zanahoria rallada, y un poco de limón.",
            "Arroz integral (en pequeñas cantidades).",
            "Infusión de manzanilla.",
          ]}
        />
        <BreakfastCard
          img={img1} // Usas la imagen importada
          titulo="Cena 2"
          items={[
            "Filete de pescado blanco (como merluza o tilapia) al horno con limón.",
            "Brócoli y calabacín al vapor.",
            "Purée de calabaza o zanahoria.",
            "Agua con rodajas de pepino o té verde sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img2} // Usas la imagen importada
          titulo="Cena 3"
          items={[
            "Tortilla de claras de huevo con espinacas y champiñones (cocinados con aceite de oliva).",
            "Ensalada de pepino, tomate y albahaca, aderezada con vinagre balsámico sin sal.",
            "Purée de coliflor o batata (en pequeñas cantidades).",
            "Infusión de jengibre.",
          ]}
        />
        <BreakfastCard
          img={img3} // Usas la imagen importada
          titulo="Cena 4"
          items={[
            "Sopa de verduras casera (sin sal añadida, con zanahorias, calabacín, y cebolla).",
            "Pollo desmenuzado (a la plancha o al horno).",
            "Tostada integral con aguacate.",
            "Agua de coco natural o infusión de hierbaluisa.",
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default Comida;
