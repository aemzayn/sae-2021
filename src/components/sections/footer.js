import { Center, Image, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Center w='90%' maxW='1400px' mx='auto' py={{ base: 3 }}>
      <Text
        d='flex'
        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
        color='gray.400'
      >
        <Image src='/icons/copyright.svg' mr={2} alt='Copyright' />
        Copyright 2021 SAE AMEROP. All Rights Reserved.
      </Text>
    </Center>
  )
}

export default Footer
