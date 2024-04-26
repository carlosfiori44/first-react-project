'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link to={'/'}>Home</Link>
          <Link to={'/tarefas'}>Tarefas</Link>
          <Link to={'/contato'}>Contato</Link>
          <Link to={'/Sobre'}>Sobre</Link>
        </Stack>
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
      </Container>
    </Box>
  )
}
