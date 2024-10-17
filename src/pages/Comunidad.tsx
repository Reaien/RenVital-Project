import NavBar from "../components/Global/NavBar";
import Post from "../components/Global/Post";
import Title from "../components/Global/Title";

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
    </>
  );
}

export default Comunidad;
