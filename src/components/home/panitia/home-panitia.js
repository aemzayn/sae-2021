import {
  Box,
  Grid,
  Heading,
  SimpleGrid,
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

        <SimpleGrid
          mt={{ base: 5, md: 12 }}
          mx='auto'
          maxW={{ base: '100%', md: '80%', lg: '75%' }}
          columns={{ base: 2, md: 3 }}
        >
          <Panitia randomString='pemhbVvnHK' role='Penanggung Jawab' />
          <Panitia randomString='NIOPTSEsSH' role='Ketua Acara' />
          <Panitia randomString='BLhaTisesW' role='Sekretaris' />
          <Panitia randomString='CWaGFtFCcL' role='Ketua Divisi Media' />
          <Panitia randomString='dpEzQfGNZI' role='Ketua Divisi Humas' />
          <Panitia randomString='jUdnxYsbNR' role='Ketua Divisi Logistik' />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default HomePanitia
