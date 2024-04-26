import { Avatar, Box, Heading, useColorModeValue, Text } from "@chakra-ui/react"
import Layout from "../../components/layout"
import SecaoArtigo from "../../components/secao-artigo"

function Sobre() {
    return (
        <Layout>
            <Heading>Sobre</Heading>
            <p>
                <SecaoArtigo>
                    O projeto foi desenvolvido por Carlos Eduardo Fiori dos Santos, aluno da Fatec de Indaiatuba
                    cursando o 4° Semestre do curso técnologo de Analise e Desenvolvimento de Sistemas
                </SecaoArtigo>

                <Box textAlign={'center'} py={'30px'}>
                    <Avatar
                        src={
                            'https://media.licdn.com/dms/image/D4D03AQFt1_qAHi7YEg/profile-displayphoto-shrink_200_200/0/1680535665418?e=1719446400&v=beta&t=rCkLjVso7IO5mWwSjJNH-UeXiYSEH4bsbhPj6ZMIaOg'
                        }
                        mb={2}
                    />

                    <Text fontWeight={600}>Carlos Eduardo</Text>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
                        Software Engineer
                    </Text>
                </Box>
            </p>
        </Layout>

    )
}

export default Sobre