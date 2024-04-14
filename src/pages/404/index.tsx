import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import '../../App.css'

function NotFound(){
    return(
        <>
            <h1>404</h1>
            <p>Página não encontrada</p>
            <Footer page="" />
        </>
    )
}

export default NotFound