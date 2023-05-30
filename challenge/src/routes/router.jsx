import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pg from "../pages/Page1";
import Pg2 from "../pages/Page2";
import Pg3 from "../pages/Page3";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pg />} />
        <Route exact path="/page2" element={<Pg2 />} />
        <Route exact path="/page3" element={<Pg3 />} />
      </Routes>
    </BrowserRouter>
  );
}
