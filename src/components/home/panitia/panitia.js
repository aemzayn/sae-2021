import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import BoringAvatar from 'boring-avatars'

function Panitia({ name = 'John Doe', role = 'Anggota', img, randomString }) {
  const nameSize = useBreakpointValue({ base: 'md', md: 'md', lg: 'lg' })
  return (
    <VStack spacing={{ base: 2 }}>
      <Center w={{ base: '50%', md: '55%' }} h={{ base: '50%', md: '55%' }}>
        <BoringAvatar
          size='100%'
          name={randomString}
          variant='beam'
          colors={['#eba83a', '#eba83a', '#fff8d9', '#d5dbb3', '#C20D90']}
        />
      </Center>
      <VStack spacing={{ base: 1 }}>
        <Heading
          as='h3'
          size={nameSize}
          fontWeight='normal'
          color='gray.700'
          textAlign='center'
        >
          {name}
        </Heading>
        <Text color='gray.500' textAlign='center'>
          {role}
        </Text>
      </VStack>
    </VStack>
  )
}

export default Panitia
