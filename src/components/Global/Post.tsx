import { useEffect, useState } from "react";

import profilePic from "../../assets/images/profile-pic.png";
import profilePic2 from "../../assets/images/profile-pic2.jpg";
import axios from "axios";
import Modal from "./Modal";
import FormNewPost from "../Comunidad/FormNewPost";
import FormNewResponse from "../Comunidad/FormNewResponse";

type Respuesta = {
  id: number;
  autor: string;
  fecha: string;
  hora: string;
  mensaje: string;
};

type Posts = {
  id: number;
  autor: string;
  fecha: string;
  hora: string;
  mensaje: string;
  respuestas: Respuesta[];
};

type Props = {};

function Post({}: Props) {
  const [posts, setPosts] = useState<Posts[]>([]);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

  const getPosts = async () => {
    try {
      // Primero, intenta obtener el estado de autenticación
      const authResponse = await axiosInstance.get("/auth/status");

      if (authResponse.data.authenticated) {
        // Si está autenticado, obtén los posts
        const postsResponse = await axiosInstance.get("/posts");
        setPosts(postsResponse.data);
      } else {
        // Si no está autenticado, redirige al login de OAuth
        window.location.href =
          "http://localhost:8080/oauth2/authorization/google";
      }
    } catch (error: any) {
      console.error("Error:", error);
      // Redirigir a OAuth si hay cualquier error de autenticación
      window.location.href =
        "http://localhost:8080/oauth2/authorization/google";
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  //state que controla el modal
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="min-h-[200px]">
        <div className="md:grid grid-cols-2 m-4 justify-items-center ">
          <div className="font-bold  text-zinc-700  ">
            ÚLTIMAS PUBLICACIONES
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="font-semibold px-9 py-2 rounded bg-emerald-600 text-white"
          >
            CREAR PUBLICACIÓN
          </button>
        </div>
        <div className="grid gap-8 justify-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="max-md:mx-10 lg:w-[720px] min-h-[300px] rounded-xl shadow-xl border-2"
            >
              <div className="grid grid-cols-4 gap-1 md:gap-0 md:grid-cols-8 m-4 h-[70px] items-center">
                <div>
                  <img
                    className="rounded-full w-16"
                    src={profilePic}
                    alt="profilePic"
                  />
                </div>
                <div className="col-span-3 md:col-span-7">
                  <div className="flex gap-7 items-center">
                    <p className="font-bold">{post.autor}</p>
                    <p className="text-white bg-emerald-700 rounded-lg text-xs md:text-base px-3 md:px-9">
                      Paciente
                    </p>
                  </div>
                  <div>
                    <p className="text-zinc-500">
                      {post.fecha} <span>{post.hora}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 px-3">
                <p>{post.mensaje}</p>
              </div>
              {post.respuestas ? (
                post.respuestas.map((respuesta) => (
                  <div className="py-4" key={respuesta.id}>
                    <div className="grid grid-cols-4 md:grid-cols-8 min-h-[80px] items-center mt-5">
                      <div className="justify-items-end mr-3">
                        <img
                          className="rounded-full w-12"
                          src={profilePic2}
                          alt="profilePic"
                        />
                      </div>
                      <div className="col-span-3 md:col-span-7">
                        <div className="flex gap-7 items-center">
                          <p className="font-bold">{respuesta.autor}</p>
                          <p className="text-white bg-sky-700 rounded-lg text-xs md:text-base px-3 md:px-9">
                            Médico
                          </p>
                        </div>
                        <p className="text-zinc-500">
                          {respuesta.fecha} <span>{respuesta.hora}</span>
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 px-8">
                      <p>{respuesta.mensaje}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 grid min-h-[40px] items-end my-4 md:ml-10">
                  No hay respuestas aún.
                </p>
              )}
              <FormNewResponse post={post.id} getPosts={() => getPosts()} />
            </div>
          ))}
        </div>
        <Modal
          onClose={() => {
            setOpenModal(false);
          }}
          open={openModal}
        >
          <FormNewPost
            onClose={() => {
              setOpenModal(false);
            }}
            getPosts={() => getPosts()}
          />
        </Modal>
      </section>
    </>
  );
}

export default Post;
