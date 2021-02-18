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
      py={{ base: '5vh' }}
      mb={{ base: '10vh', md: '15vh' }}
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
          mt={{ base: 5, md: 12 }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(5, 1fr)',
            lg: 'repeat(6, 1fr)',
          }}
          gap={{ base: 5 }}
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
