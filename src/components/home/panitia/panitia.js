import {
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'

function Panitia() {
  const nameSize = useBreakpointValue({ base: 'md', md: 'lg' })
  return (
    <Box>
      <Box
        d='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='50px'
      >
        <Image
          w='100%'
          h='100%'
          objectFit='cover'
          objectPosition='center'
          src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
          borderRadius='50%'
        />
      </Box>
      <VStack mt='2' spacing={{ base: 1 }}>
        <Heading
          fontFamily='fontFamily.main'
          as='h4'
          size={nameSize}
          fontWeight='normal'
        >
          John Doe
        </Heading>
        <Text color='gray.500'>Manager</Text>
      </VStack>
    </Box>
  )
}

export default Panitia
