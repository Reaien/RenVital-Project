import axios from "axios";
import { useForm } from "react-hook-form";
import { useUser } from "../../contexts/UserContext";
type Props = {
  onClose: () => void;
  getPosts: () => void;
};

type FormData = {
  mensaje: string;
};

function FormNewPost({ getPosts, onClose }: Props) {
  //useForm
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

  //Solicitud POST Post
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

    try {
      await axiosInstance.post(`posts`, payLoad);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
    reset();
    getPosts();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center text-center px-24 text-xl"
      >
        <div className="mx-auto text-3xl font-bold mb-3 text-emerald-700">
          Ingrese una consulta médica
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Consulta</label>
          <textarea
            placeholder="Ingrese su consulta aquí"
            className="border border-gray-300 rounded-lg block  p-1 h-[200px] w-[400px]"
            {...register("mensaje", { required: true })}
          />
        </div>
        <button
          onClick={() => onClose()}
          className="py-1  rounded-lg bg-emerald-700 text-white font-bold mb-14"
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </>
  );
}

export default FormNewPost;
