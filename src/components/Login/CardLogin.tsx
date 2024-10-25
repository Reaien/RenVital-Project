import logo from "../../assets/images/logo.png";

type Props = {};

function CardLogin({}: Props) {
  const handlerGoogleLogin = () => {
    console.log("hola");
  };
  return (
    <section className="grid justify-center mb-52 mt-32">
      <div className="mx-5 md:w-[400px] bg-white border-2 shadow-lg min-h-[280px] rounded-md">
        <div className="grid justify-center mt-4">
          <img className="h-24 ml-2" src={logo} alt="logo" />
          <p className="text-center font-bold text-emerald-700">
            Iniciar sesión
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlerGoogleLogin}
            className="bg-slate-100 px-12 py-4 font-bold shadow-lg border"
          >
            Inicia sesión con google
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardLogin;
