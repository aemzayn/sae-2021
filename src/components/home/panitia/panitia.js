import {
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'

function Panitia({ name = 'John Doe', role = 'Anggota', img }) {
  const nameSize = useBreakpointValue({ base: 'md', md: 'md', lg: 'lg' })
  return (
    <Box>
      <Box
        d='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='50px'
      >
        <Image
          w={{ base: '70%' }}
          h={{ base: '70%' }}
          objectFit='cover'
          objectPosition='center'
          src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
          borderRadius='50%'
          draggable={false}
          alt={name}
        />
      </Box>
      <VStack mt='2' spacing={{ base: 1 }}>
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
    </Box>
  )
}

export default Panitia
