import Layout from "../../components/layout"
import SecaoArtigo from "../../components/secao-artigo"
import { Heading } from "@chakra-ui/react"

function Home() {
    return (
        <Layout>
            <Heading>Home</Heading>
            <p>
                <SecaoArtigo>
                    Esse projeto tem como objetivo demonstrar os recursos oferecidos pelo
                    React, utilizando um padrão de organização de pastas por recursos e páginas
                </SecaoArtigo>
            </p>
        </Layout>

    )
}

export default Home