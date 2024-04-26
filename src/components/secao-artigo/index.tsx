import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
}


export default function SecaoArtigo(props: Props) {
    const { children } = props

  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
        {children}
      </Text>
    </Stack>
  )
}
