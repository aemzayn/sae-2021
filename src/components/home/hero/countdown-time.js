import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { Calendar, Pin } from '../../../assets/icons'

function CountdownTime() {
  const fontSize = useBreakpointValue({ base: 'md', lg: '2xl', xl: 'lg' })
  return (
    <Flex
      color='white'
      pt={{ base: 4, md: 6, xl: 0 }}
      pb={{ base: 0, xl: 4 }}
      justify='space-between'
      w={{ base: '100%', md: '90%', lg: '80%', xl: '100%' }}
      mx='auto'
      userSelect='none'
    >
      <Flex fontSize={fontSize} align='center' ml={{ base: 1, md: 2 }}>
        <Calendar mr={1} width='1rem' h='1rem' />
        <Text>Juni 2021</Text>
      </Flex>
      <Flex fontSize={fontSize} align='center' mr={{ base: 1, md: 2, xl: 0 }}>
        <Pin mr={1} w='1rem' h='1rem' />
        {/* <Image src='/icons/pin.svg' alt='Location icon' mr={1} /> */}
        <Text>Iberia</Text>
      </Flex>
    </Flex>
  )
}

export default CountdownTime
