import Title from "./Title";
import google_icon from "../../assets/images/google-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

type User = {
  email: string;
  name: string;
  picture: string;
};

function LoginButtons({}: Props) {
  const [user, setUser] = useState<User>();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

  const getUser = () => {
    axiosInstance.get("/user-info").then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    getUser();
    console.log(user);
  }, []);

  const handleClick = () => {
    window.location.href = "http://localhost:8080/login/oauth2/code/google";
  };

  return (
    <>
      <section className="lg:w-[400px] h-[450px]">
        <Title
          titulo={"INICIA SESIÓN"}
          subTitulo={"Únete a la comunidad médica especializada en salud renal"}
        />
        <div className=" flex justify-center">
          <button
            onClick={handleClick}
            className="bg-white border flex items-center gap-2 border-stone-400 rounded-full px-2 h-[60px]"
          >
            <p>Inicia sesión con Google</p>
            <img className="w-8" src={google_icon} alt="icon" />
          </button>
        </div>
      </section>
    </>
  );
}

export default LoginButtons;
