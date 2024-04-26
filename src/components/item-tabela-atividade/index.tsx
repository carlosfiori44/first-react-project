import { Button, Stack, Text } from "@chakra-ui/react"

interface Props {
    text: string
}

function ItemTabela({ text }: Props) {
    return (
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
                <Text fontSize={{ base: '25px' }} textAlign={'left'} maxW={'4xl'}>
                    {text}
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Button variant="outline" colorScheme="yellow">Pendente</Button>
                    <Button colorScheme="red">Excluir</Button>
                </Stack>
            </Stack>
        </Stack>
    )

}

export default ItemTabela
