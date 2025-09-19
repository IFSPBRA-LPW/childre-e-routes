import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function TemplatePage({children, title}){

    return(
        <>
            <Header title={title}/>
                {children}
            <Footer/>
        </>
    )
}