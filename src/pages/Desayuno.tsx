import NavBar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";
import CardComidas from "../components/Alimentacion/CardComida";
import img from "../assets/images/breakfast-icon.jpg"
import img1 from "../assets/images/Desayuno2.png"
import img2 from "../assets/images/Desayuno3.png"
import img3 from "../assets/images/Desayuno4.png"
type Props = {};

function Comunidad({}: Props) {
  return (
    <>
      <NavBar />
      <br/>
      <CardComidas img={img} img1={img1} img2={img2} img3={img3}/>
      <br/>
      <Footer />
    </>
  );
}

export default Comunidad;
