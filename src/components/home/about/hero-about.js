import { Box, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import PrimaryButton from '../../buttons/primary-btn'

function HeroAbout() {
  const headingSize = useBreakpointValue({
    base: '2xl',
    md: 'lg',
    lg: 'xl',
    xl: '2xl',
  })
  return (
    <Box
      d='flex'
      flexDir={{ base: 'column', md: 'row' }}
      bg='white'
      my={{ base: '10vh', md: '15vh' }}
      w={{ base: '100%', md: '90%' }}
      mx='auto'
      maxW='1400px'
      as='section'
    >
      <Box w={{ base: '100%', md: '80%' }} maxW='1400px' mx='auto'>
        <Image
          src='/images/sae-barcelona.jpg'
          alt='Simposium Amerika Eropa 2019'
          w='100%'
          h='100%'
          objectFit='cover'
          borderRadius={{ base: false, md: 'xl' }}
          boxShadow='xl'
          draggable={false}
          loading='lazy'
        />
      </Box>
      <Box
        d='flex'
        flexDir='column'
        justifyContent='center'
        border='1px solid red.500'
        w='90%'
        maxW='1400px'
        mx='auto'
        mt={{ base: 4, md: 0 }}
        pl={{ base: 0, md: '5%' }}
      >
        <Heading
          color='brand.blue'
          size={headingSize}
          fontFamily='fontFamily.main'
        >
          Tentang Simposium{' '}
          <Text
            as='span'
            fontWeight='700'
            bg='gradient.main'
            backgroundClip='text'
            style={{ WebkitTextFillColor: 'transparent' }}
          >
            Amerika Eropa
          </Text>
        </Heading>

        <Text
          my={{ base: 4, md: 6 }}
          fontSize={{ base: 'lg' }}
          color='gray.500'
          lineHeight={{ base: '1.4' }}
        >
          Sebagai sidang tertinggi dalam perhimpunan pelajar Indonesia se-Dunia
          Kawasan Amerika Eropa (PPIDK Amerop), Simposium PPI se-Dunia Kawasan
          Amerika Eropa telah menjadi agenda rutin PPIDK Amerop yang
          diselenggarakan setiap tahun.
        </Text>

        <PrimaryButton
          icon={<Image src='/icons/arrow-right.svg' />}
          href='/event'
        >
          Lanjut Baca
        </PrimaryButton>
      </Box>
    </Box>
  )
}

export default HeroAbout
