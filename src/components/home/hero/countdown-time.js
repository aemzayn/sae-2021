import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

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
        <Image src='/icons/calendar.svg' mr={1} alt='Calendar icon' />
        <Text>Juni 2021</Text>
      </Flex>
      <Flex fontSize={fontSize} align='center' mr={{ base: 1, md: 2, xl: 0 }}>
        <Image src='/icons/pin.svg' alt='Location icon' mr={1} />
        <Text>Iberia</Text>
      </Flex>
    </Flex>
  )
}

export default CountdownTime
