import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; // Importa los iconos que necesites

const Footer = () => {
  return (
    <footer className="flex-col min-h-full text-center bg-gradient-to-b bg-teal-300/60 from-white ">
      <div className=" inline-flex justify-between max-w-[1000px] m-0 flex-wrap">
        <div className="flex-1  min-w-[200px] ">
          <h4 className=" px-5 py-1+++ text-justify my-10 text-2xl">
            Sobre Nosotros
          </h4>
          <p className=" text-justify text-sm">
            Somos una asociación creada a través de la colaboración
            internacional entre el Tecnológico de Monterrey y DuocUC Viña del
            mar entre estudiantes de Medicína e Ingeniería en informática para
            ofrecer una solución tecnológica a pacientes con trastornos renales
            y promover un mejor estilo de vida.
          </p>
        </div>

        <div className="flex-1 p-1 min-w-[200px] ">
          <ul className="text-xs mb-2">
            <li></li>
          </ul>
        </div>

        <div className="flex-1 p-1 min-w-[200px] ">
          <h4 className="flex text-center mb-[10px]">Síguenos</h4>
          <ul className="">
            <li className="theme.listStyleType * p-0:">
              <a
                className="flex text-center mb-[10px]"
                href="https://www.facebook.com/"
              >
                <FaFacebook className="mr-2" /> Faceboock
              </a>
              <br></br>
            </li>
            <li className="flex items-center bottom-[10px]">
              <a
                href="https://www.instagram.com/"
                className="flex text-center mb-[10px]"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <br />
            </li>
            <br />
            <li className="flex items-center bottom-[10px]">
              <a
                href="https://twitter.com"
                className="flex text-center mb-[10px]"
              >
                <FaYoutube className="mr-2" /> twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[20px] p-[10px]">
        <p>
          &copy; {new Date().getFullYear()} Renvital tiene Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
