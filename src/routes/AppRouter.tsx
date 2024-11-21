import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Forum from "../pages/Forum";
import Info from "../pages/Info";
import Comunidad from "../pages/Comunidad";
import Login from "../pages/Login";
import Comida from "../pages/Comida";
import Desayuno from "../pages/Desayuno";
import Snack from "../pages/Snack";
import Almuerzo from "../pages/Almuerzo";
import Merienda from "../pages/Merienda";
import Cena from "../pages/Cena";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Comida" element={<Comida />} />
        <Route path="/Desayuno" element={<Desayuno />} />
        <Route path="/Snack" element={<Snack />} />
        <Route path="/Almuerzo" element={<Almuerzo />} />
        <Route path="/Merienda" element={<Merienda />} />
        <Route path="/Cena" element={<Cena />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
