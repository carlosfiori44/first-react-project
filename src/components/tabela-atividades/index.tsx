import { Box, Checkbox, Heading } from '@chakra-ui/react'
import ItemTabela from '../item-tabela-atividade'
import InputCustom from '../input-custom'
import CustomButton from '../button-custom'

function TabelaAtividade() {
    return (
        <Box my={10} alignItems={'center'}>
            <Heading as='h2' size='lg'>Inserir nova tarefa</Heading>
            <Box display={'flex'} justifyContent={'center'}  m={5} w={'auto'} >                
                <InputCustom placeholder='Digite o nome da task' type='Text' value=''></InputCustom>
                <Checkbox mx={10}>Finalizada?</Checkbox>
                <CustomButton label='Inserir' type='button'></CustomButton>
            </Box>

            <ItemTabela text='Atividade de Gestão'></ItemTabela>
            <ItemTabela text='Concluir relatório'></ItemTabela>
            <ItemTabela text='Atividade 5 de LP'></ItemTabela>
            <ItemTabela text='Ler artigo'></ItemTabela>
            <ItemTabela text='Ler livro'></ItemTabela>
            <ItemTabela text='Ler relatórios'></ItemTabela>
        </Box>
    )
}

export default TabelaAtividade