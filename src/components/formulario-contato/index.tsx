import { Box, Container, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, VStack, Button, Heading } from "@chakra-ui/react"
import { BsPerson } from "react-icons/bs"
import { MdOutlineEmail, MdOutlineNumbers } from "react-icons/md"

function Formulario() {
  return (


    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Heading>Contato</Heading>
          <Box bg="white" borderRadius="lg" p={4}>
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Nome</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>E-mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="celular">
                  <FormLabel>Telefone</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineNumbers color="gray.800" />
                    </InputLeftElement>
                    <Input type="tel" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name" float="right">
                  <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                    Enviar
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default Formulario