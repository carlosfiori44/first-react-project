import styles from './tabela.module.css'

function TabelaAtividade(){
    return(
        <div className={styles.div}>
            <table className={styles.tabelaAtividade}>
                <thead>
                    <th>Tarefa</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Preparar reunião</td>
                        <td>A fazer</td>
                    </tr>
                    <tr>
                        <td>Concluir relatório</td>
                        <td>A fazer</td>
                    </tr>
                    <tr>
                        <td>Atividade 5 de LP</td>
                        <td>A fazer</td>
                    </tr>
                    <tr>
                        <td>Ler artigo</td>
                        <td>Finalizado</td>
                    </tr>
                </tbody>                
            </table>
        </div>
    )
}

export default TabelaAtividade