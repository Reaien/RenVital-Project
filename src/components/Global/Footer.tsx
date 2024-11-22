const Footer = () => {
  return (
    <footer className="px-7  bg-gradient-to-b bg-emerald-300/60 from-white mt-48">
      <div className="flex justify-center items-center ">
        <div className="md:w-[800px]">
          <p className=" mt-10 mb-5 text-2xl text-center">Sobre Nosotros</p>

          <p className=" text-justify text-sm">
            Somos una asociación creada a través de la colaboración
            internacional entre el Tecnológico de Monterrey y DuocUC Viña del
            mar entre estudiantes de Medicína e Ingeniería en informática para
            ofrecer una solución tecnológica a pacientes con trastornos renales
            y promover un mejor estilo de vida.
          </p>
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
