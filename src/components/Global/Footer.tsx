import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; // Importa los iconos que necesites

const Footer = () => {
  return (
    <footer className="grid-rows-2 px-7 bg-gradient-to-b bg-emerald-300/60 from-white mt-48">
      <div className="grid md:grid-cols-2 items-center ">
        <div className="md:w-3/4">
          <p className=" mt-10 mb-5 text-2xl text-center">Sobre Nosotros</p>

          <p className=" text-justify text-sm">
            Somos una asociación creada a través de la colaboración
            internacional entre el Tecnológico de Monterrey y DuocUC Viña del
            mar entre estudiantes de Medicína e Ingeniería en informática para
            ofrecer una solución tecnológica a pacientes con trastornos renales
            y promover un mejor estilo de vida.
          </p>
        </div>
        <div className="mt-10 p-1 max-md:mt-16 grid justify-center">
          <p className="mb-[10px] text-2xl">Síguenos</p>
          <ul>
            <li>
              <a
                className="flex items-center "
                href="https://www.facebook.com/"
              >
                <FaFacebook className="mr-2" /> Faceboock
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="flex items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="flex items-center">
                <FaYoutube className="mr-2" /> twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 p-[10px] text-center">
        <p>
          &copy; {new Date().getFullYear()} RenVital. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
