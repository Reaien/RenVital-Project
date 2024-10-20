import { jwtDecode } from "jwt-decode";
import logo from "../../assets/images/logo.png";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

type Props = {};

function CardLogin({}: Props) {
  const handlerGoogleLogin = async (credentialResponse: CredentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    const userToken = credentialResponse.credential;
    console.log(credentialResponseDecoded);

    // Crear el payload con los datos del usuario
    const userDataPayload = {
      email: credentialResponseDecoded.email,
      nombre: credentialResponseDecoded.name, // Asegúrate de que este sea el nombre correcto del campo
      profile_pic: credentialResponseDecoded.picture, // Asegúrate de que este sea el nombre correcto del campo
    };

    const URL = "http://localhost:8080/users";

    try {
      await axios
        .post(URL, userDataPayload, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          console.log("enviado");
        });
    } catch (error) {
      console.log(error);
    }
  };
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
            onSuccess={handlerGoogleLogin}
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
