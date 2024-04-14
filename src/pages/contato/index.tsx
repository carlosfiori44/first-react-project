import Footer from "../../components/footer"
import Formulario from "../../components/formulario-contato"
import '../../App.css'

function Contato(){
    return(
        <div>
            <Formulario />
            <Footer page='contato' />
        </div>
    )
}

export default Contato