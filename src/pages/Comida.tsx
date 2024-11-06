import NavBar from "../components/Global/NavBar";
import HeroImage from "../components/Home/HeroImage";
import Comidas from "../components/Alimentacion/Comidas";

import Footer from "../components/Global/Footer";
import img from "../assets/images/baneer2.jpg";

type Props = {};

function Comida({}: Props) {
  return (
    <>
      <NavBar />
      <HeroImage
        tamaño={"md:h-[600px]  md:flex"}
        img={img}
        texto1="Una alimentación balanceada es clave para tu bienestar. Nuestros planes nutricionales, adaptados a tus necesidades, te ayudan a controlar y prevenir condiciones como la diabetes o problemas renales, promoviendo una nutrición equilibrada y consciente."
        Texto2="Cuida tu Salud con un Plan Nutricional Personalizado."
      ></HeroImage>
      <Comidas />
      <Footer />
    </>
  );
}

export default Comida;
