import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/footer"
import '../../App.css'

function Home(){
    const navigate = useNavigate()

    return (
        <div>
            <h1 onClick={() => {navigate('/sobre')}}>Home</h1>
            <p>Esse projeto tem como objetivo demonstrar os recursos oferecidos pelo 
                React, utilizando um padrão de organização de pastas por recursos e páginas
            </p>

            <Footer page="home" />
        </div>

    )
}

export default Home