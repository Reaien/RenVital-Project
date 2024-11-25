import { ReactNode } from "react";

type Modal = {
  open: ReactNode;
  onClose: () => void;
  children: ReactNode;
};
function Modal({ open, onClose, children }: Modal) {
  return (
    <div
      className={`fixed inset-0 z-10 flex justify-center items-center ${
        open ? "visible bg-black/50 " : "invisible"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation;
        }}
        className={`flex flex-col items-end bg-white  transition-all rounded-lg ${
          open ? "scale-90 opacity-100" : "scale-100 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="z-20 -mb-6 fill-emerald-500 hover:fill-emerald-700  font-bold  text-3xl bg-emerald-600 text-white w-14 h-14 "
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
