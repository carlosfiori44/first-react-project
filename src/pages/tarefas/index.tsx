import Footer from "../../components/footer"
import TabelaAtividade from "../../components/tabela-atividades"
import '../../App.css'

function Tarefas(){
    return(
        <div>
            <h1>Tarefas</h1>
            <TabelaAtividade />
            <Footer page="tarefas" />
        </div>        
    )
}

export default Tarefas