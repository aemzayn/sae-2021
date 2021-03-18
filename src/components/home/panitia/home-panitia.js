import {
  Box,
  Grid,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Panitia from './panitia'

function HomePanitia() {
  const titleSize = useBreakpointValue({ base: '2xl' })
  return (
    <Box
      bg='gradient.orange'
      py={{ base: 20 }}
      // mb={{ base: '10vh', md: '15vh' }}
      as='section'
    >
      <Box
        d='flex'
        flexDir='column'
        w='90%'
        maxW='1400px'
        mx='auto'
        bg='gradient.orange'
      >
        <Heading size={titleSize} color='brand.blue' textAlign='center'>
          Susunan{' '}
          <Text as='span' color='brand.red'>
            Panitia
          </Text>
        </Heading>

        <Grid
          maxW={{ base: '100%', md: '80%' }}
          mx='auto'
          mt={{ base: 5, md: 12 }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          columnGap={{ base: 0 }}
          rowGap={{ base: 6, lg: 8 }}
          flexDir='row'
          flexWrap='wrap'
          justifyItems='center'
        >
          <Panitia />
          <Panitia />
          <Panitia />
          <Panitia />
          <Panitia />
          <Panitia />
        </Grid>
      </Box>
    </Box>
  )
}

export default HomePanitia
