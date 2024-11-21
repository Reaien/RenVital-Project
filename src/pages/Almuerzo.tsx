import NavBar from "../components/Global/NavBar";

import BreakfastCard from "../components/Alimentacion/Desayuno";

import Footer from "../components/Global/Footer";

import img from "../assets/images/Almuerzo2.jpg";
import img1 from "../assets/images/Almuerzo1.jpg";
import img2 from "../assets/images/Almuerzo3.png";
import img3 from "../assets/images/Almuerzo1.png";


type Props = {};

function Comida({}: Props) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center space-y-4">
        <BreakfastCard
          img={img} // Usas la imagen importada
          titulo="Almuerzo 1"
          items={[
            "Pechuga de pollo a la plancha con un toque de aceite de oliva.",
            "Ensalada de lechuga, pepino y zanahoria rallada con vinagre balsámico (sin sal).",
            "Arroz integral o quinoa (en pequeñas cantidades).",
            "Agua natural o infusión de hierbaluisa.",
          ]}
        />
        <BreakfastCard
          img={img1} // Usas la imagen importada
          titulo="Almuerzo 2"
          items={[
            "Filete de pescado blanco (como tilapia o merluza) al horno con limón y hierbas.",
            "Espárragos cocidos al vapor y brócoli (en pequeñas cantidades).",
            "Purée de calabaza o zanahoria.",
            "IInfusión de manzanilla sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img2} // Usas la imagen importada
          titulo="Almuerzo 3"
          items={[
            "Tortilla de claras de huevo con espinacas y champiñones (cocinados en aceite de oliva).",
            "Arroz integral o quinoa con tomate picado y cebolla.",
            "Ensalada de pepino con limón y hierbabuena.",
            "Té verde sin azúcar.",
          ]}
        />
        <BreakfastCard
          img={img3} // Usas la imagen importada
          titulo="Almuerzo 4"
          items={[
            "Pollo al horno con hierbas (romero, tomillo y ajo) y batatas (en pequeñas cantidades).",
            "Verduras al vapor (como calabacín, brócoli o zanahoria).",
            "Purée de coliflor.",
            "Agua natural con rodajas de pepino.",
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default Comida;
