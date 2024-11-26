import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import Modal from "./Modal";
import LoginButtons from "./LoginButtons";
import axios from "axios";

type Props = {};

function NavBarLoginButton({}: Props) {
  const { user } = useUser();
  const [openModal, setOpenModal] = useState(false);

  const handleLogOut = async () => {
    const axiosInstance = await axios.create({
      baseURL: "http://localhost:8080",
      withCredentials: true,
    });

    try {
      axiosInstance.post(`/logout`);
      window.location.href = "/";
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      {user ? (
        <div className="flex gap-3">
          <div className="bg-emerald-100 border flex items-center gap-2 border-stone-400 rounded-full px-2 h-[27px]">
            <p>Hola ! {user.name}</p>
            <img
              className="rounded-full w-5"
              src={user.picture}
              alt="userpicture"
            />
          </div>
          <button onClick={() => handleLogOut()}>Logout</button>
        </div>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="block py-2 px-3  text-emerald-700 rounded md:p-0 "
        >
          Login
        </button>
      )}

      <Modal
        onClose={() => {
          setOpenModal(false);
        }}
        open={openModal}
      >
        <LoginButtons />
      </Modal>
    </>
  );
}

export default NavBarLoginButton;
