import NavBar from "../components/Global/NavBar";
import Post from "../components/Global/Post";
import Title from "../components/Global/Title";
import Footer from "../components/Global/Footer";

type Props = {};

function Comunidad({}: Props) {
  return (
    <>
      <NavBar />
      <Title
        titulo={"Comunidad Médica"}
        subTitulo={
          "Consulta y responde a tus dudas sobre las enfermedades renales"
        }
      />
      <Post />
      <Footer/>
    </>
  );
}

export default Comunidad;
