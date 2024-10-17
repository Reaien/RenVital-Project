import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Forum from "../pages/Forum";
import Info from "../pages/Info";
import Comunidad from "../pages/Comunidad";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/comunidad" element={<Comunidad />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
