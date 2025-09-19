import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contato } from "../pages/Contato";
import { ErrorPage } from "../pages/ErrorPage";

export function RouterMain(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}