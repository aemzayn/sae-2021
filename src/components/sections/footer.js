import { Center, Text } from '@chakra-ui/react'
import { Copyright } from '../../assets/icons'

function Footer() {
  return (
    <Center
      w='full'
      py={{ base: 4, lg: 6 }}
      as='footer'
      bg='#fce9ec'
      pos='relative'
      _before={{
        content: '""',
        pos: 'absolute',
        display: 'block',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        w: '90%',
        h: '1.1px',
        bgColor: 'pink.100',
      }}
    >
      <Text
        d='flex'
        align='center'
        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
        color='gray.600'
      >
        {/* <Image src='/icons/copyright.svg' mr={2} alt='Copyright' /> */}
        <Copyright
          alignSelf='center'
          w='0.8rem'
          h='0.8rem'
          mr='2'
          fill='black'
        />
        Copyright 2021 SAE AMEROP. All Rights Reserved.
      </Text>
    </Center>
  )
}

export default Footer
