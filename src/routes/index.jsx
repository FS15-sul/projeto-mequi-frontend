import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import NaoEncontrado from "../pages/NaoEncontrado";
import SiteLayout from "../layouts/SiteLayout";
import Produto from "../pages/Produto";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/produto/:id" element={<Produto />} />
                </Route>

                <Route path="*" element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;