import { Box, useBreakpointValue } from '@chakra-ui/react'
import Countdown from './countdown'
import HeroButtonGroup from './hero-button-group'
import HeroTitle from './hero-title'

function Hero() {
  const height = useBreakpointValue({ base: 'unset', xl: '75vh' })

  return (
    <Box
      id='hero'
      d='flex'
      flexDir={{ base: 'column', xl: 'row' }}
      w='90%'
      maxW='1400px'
      mx='auto'
      bg={{ base: 'gradient.light', xl: 'brand.light' }}
      borderRadius='xl'
      px={{ base: 6, md: 10 }}
      minH={{ base: 'unset', xl: '75vh' }}
      py={{ base: 'unset', xl: 10 }}
    >
      <Box
        d='flex'
        flexDir='column'
        py={{ base: 4, lg: 8, xl: 20 }}
        alignItems={{ base: 'center', xl: 'flex-start' }}
        justifyContent={{ base: 'unset', xl: 'center' }}
        w={{ base: '100%', xl: '50%' }}
        pl={{ base: 'unset', xxl: 4 }}
      >
        <HeroTitle />
        <HeroButtonGroup />
      </Box>
      <Box
        w={{ base: '100%', xl: '50%' }}
        d='flex'
        flexDir='column'
        justifyContent='center'
        alignItems={{ base: 'unset', xl: 'center' }}
        bgImage={{ base: ' unset', xl: 'url(/bg.png)' }}
        bgPos={{ base: 'unset', xl: 'center' }}
        bgSize={{ base: 'unset', xl: 'contain' }}
        bgRepeat={{ base: 'unset', xl: 'no-repeat' }}
      >
        <Countdown />
      </Box>
    </Box>
  )
}

export default Hero
