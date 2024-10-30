import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; // Importa los iconos que necesites

const Footer = () => {
  return (
    <footer className=" px-10 py-0 text-center bg-gradient-to-b bg-emerald-300/60 from-white ">
      <div className="inline-flex justify-between max-w-[1000px] m-0 flex-wrap">
        <div className="flex-1  min-w-[200px] ">
          <h4 className=" px-5 py-1+++ text-justify my-10 text-2xl">
            Sobre Nosotros
          </h4>
          <p className="text-justify">
            Somos una compañía dedicada a la música y a compartir las mejores
            playlists con el mundo.
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
