import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contato } from "../pages/Contato";
import { ErrorPage } from "../pages/ErrorPage";
import { Sobre } from "../pages/Sobre";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
