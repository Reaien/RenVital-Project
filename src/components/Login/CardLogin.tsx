import { jwtDecode } from "jwt-decode";
import logo from "../../assets/images/logo.png";
import { GoogleLogin } from "@react-oauth/google";

type Props = {};

function CardLogin({}: Props) {
  return (
    <section className="grid justify-center mt-32">
      <div className="mx-5 md:w-[400px] bg-white border-2 shadow-lg min-h-[280px] rounded-md">
        <div className="grid justify-center mt-4">
          <img className="h-24 ml-2" src={logo} alt="logo" />
          <p className="text-center font-bold text-emerald-700">
            Iniciar sesión
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <GoogleLogin
            width={"300"}
            onSuccess={(credentialResponse) => {
              const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
              );
              console.log(credentialResponseDecoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default CardLogin;
