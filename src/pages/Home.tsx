import NavBar from "../components/Global/NavBar";
import HeroImage from "../components/Home/HeroImage";
import CardSection from "../components/Home/CardSection";
import InfoSection from "../components/Info/InfoSection";

import Footer from "../components/Global/Footer";
import img from "../assets/images/banner.jpg";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <NavBar />
      <HeroImage
        tamaño={"md:ml-32"}
        img={img}
        texto1="Explora recursos actualizados, consejos médicos y herramientas interactivas diseñadas para acompañarte en el manejo de tu salud renal. Estamos aquí para ayudarte a tomar decisiones informadas y mejorar tu calidad de vida."
        Texto2="Cuidamos de tu salud renal: Información confiable, planes alimenticios y apoyo médico a un clic de distancia."
      />
      <CardSection />
      <InfoSection />
      <Footer />
    </>
  );
}

export default Home;
