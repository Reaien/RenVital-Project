import NavBar from "../components/NavBar";
import InfoPdf from "../components/InfoPdf";
import Title from "../components/Title";

type Props = {};

function Info({}: Props) {
  return (
    <>
      <NavBar />
      <Title
        titulo={"Enfermedades renales"}
        subTitulo={
          "Accede de manera gratuita a nuestro material para conocer más acerca de las enfermedades renales y avanza a una vida más saludable y consciente"
        }
      />
      <InfoPdf />
    </>
  );
}

export default Info;
