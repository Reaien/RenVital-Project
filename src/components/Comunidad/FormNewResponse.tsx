import axios from "axios";
import { useForm } from "react-hook-form";
import { useUser } from "../../contexts/UserContext";

type Props = {
  post: number;
  getPosts: () => void;
};

type FormData = {
  mensaje: string;
};

function FormNewResponse({ post, getPosts }: Props) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  //Fecha Actual
  const obtenerFechaActual = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Meses empiezan en 0
    const día = String(hoy.getDate()).padStart(2, "0");
    return `${año}-${mes}-${día}`;
  };
  // HoraActual
  const obtenerHoraActual = () => {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    return `${horas}:${minutos}:${segundos}`;
  };

  //hook user
  const { user } = useUser();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });
  const onSubmit = async (data: FormData) => {
    const payLoad = {
      autor: user?.name,
      picture: user?.picture,
      fecha: obtenerFechaActual(),
      hora: obtenerHoraActual(),
      mensaje: data.mensaje,
    };
    console.log(payLoad);
    console.log(post);

    try {
      await axiosInstance.post(`/respuestas/post/${post}`, payLoad);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
    getPosts();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid p-8 min-h-[100px]">
      <input
        className="border-2 p-1 my-3  flex-wrap"
        placeholder="Deja tu respuesta aquí"
        {...register("mensaje", { required: true })}
      ></input>
      <button
        type="submit"
        className=" font-semibold px-9 py-1 rounded bg-blue-700 text-white"
      >
        Responder
      </button>
    </form>
  );
}

export default FormNewResponse;
