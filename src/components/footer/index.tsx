import { Link } from "react-router-dom"
import styles from './Footer.module.css'

interface Props{
    page : string
}


function Footer({ page } : Props){
    return(
        <div className={styles.footer}>
            { page === 'home' ? null : <Link to={'/' || page}>Home</Link> }
            { page === 'tarefas' ? null : <Link to={'/tarefas' || page}>Tarefas</Link> }
            { page === 'contato' ? null : <Link to={'/contato' || page}>Contato</Link> }
            { page === 'sobre' ? null : <Link to={'/Sobre' || page}>Sobre</Link> }
        </div>
    )
}

export default Footer