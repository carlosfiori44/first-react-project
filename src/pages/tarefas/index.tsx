import TabelaAtividade from "../../components/tabela-atividades"
import Layout from "../../components/layout"
import { Box, Heading } from "@chakra-ui/react"

function Tarefas() {
    return (
        <Layout>
            <Box py={5}> 
                <Heading as='h2' size='2xl'>Tarefas</Heading>
                <hr />
            </Box>
            <TabelaAtividade />
        </Layout>
    )
}

export default Tarefas