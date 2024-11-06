import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Forum from "../pages/Forum";
import Info from "../pages/Info";
import Comunidad from "../pages/Comunidad";
import Login from "../pages/Login";
import Comida from "../pages/Comida";
import Desayuno from "../pages/Desayuno";


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
      </Routes>
    </Router>
  );
};

export default AppRouter;
