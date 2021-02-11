import { Box, Center, Flex, VStack } from '@chakra-ui/react'
import Countdown from '../countdown'
import CountdownTime from '../countdown-time'

function HeroCountdown() {
  return (
    <Center
      align='center'
      justify='center'
      minH='max-content'
      w='50%'
      // // w={{ base: 'fit-content', md: '100%', lg: '50%' }}
      // // h={{ base: '100%', lg: 'unset' }}
      // w='100%'
      // h='100%'
      // justify='center'
      // mt={{ base: 2, md: 8, lg: 0 }}
      // // h='100%'
      // bgImage='url("/bg.png")'
      // bgSize={{ base: '100%', lg: '75%' }}
      // bgRepeat='no-repeat'
      // bgPos={{ base: 'top', lg: 'center center' }}
      pb={{ base: '3rem', lg: 'unset' }}
      w='100%'
      pos='relative'
    >
      <VStack
        pos='relative'
        zIndex='2'
        flexDir={{ base: 'column-reverse', xl: 'column' }}
      >
        <CountdownTime />
        <Countdown />
      </VStack>
      <Box
        pos='absolute'
        left='0'
        right='0'
        top='0'
        bottom='0'
        bg='gradient.main'
        zIndex='1'
        clipPath={{
          base: 'unset',
          xl: 'polygon(20% 0, 10% 100%, 100% 100%, 100% 0)',
        }}
      />
    </Center>
  )
}

export default HeroCountdown
