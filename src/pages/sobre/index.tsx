import { Link } from "react-router-dom"
import Footer from "../../components/footer"
import '../../App.css'

function Sobre(){
    return (
        <div>
            <h1>Sobre</h1>
            <p>
                O projeto foi desenvolvido por Carlos Eduardo Fiori dos Santos, aluno da Fatec de Indaiatuba
                cursando o 4° Semestre do curso técnologo de Analise e Desenvolvimento de Sistemas 
            </p>
            <Footer page="sobre" />
        </div>
        
    )
}

export default Sobre