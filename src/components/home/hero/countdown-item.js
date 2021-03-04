import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

function CountdownItem({ label, time = '00' }) {
  const headingSize = useBreakpointValue({
    base: 'lg',
    md: 'xl',
    lg: '2xl',
    xl: 'lg',
  })
  const labelfontSize = useBreakpointValue({
    base: 'sm',
    md: 'xl',
    lg: '2xl',
    xl: 'lg',
  })
  const borderRadius = useBreakpointValue({ base: 'xl', md: '2xl', xl: 'xl' })

  return (
    <Box
      textAlign='center'
      bgColor='white'
      borderRadius={borderRadius}
      boxShadow={{ base: 'lg', md: 'xl' }}
      mx={{ base: 1, md: 2, xl: 0 }}
      w={{ base: 'auto', xl: '100%' }}
      userSelect='none'
    >
      <Box
        py={{ base: 5, md: 8, lg: 12, xl: 8 }}
        boxShadow={{ base: 'md', md: 'lg' }}
        borderRadius={borderRadius}
      >
        <Heading
          size={headingSize}
          color='brand.blue'
          suppressHydrationWarning={true}
        >
          {time}
        </Heading>
      </Box>
      <Box px='0' py={{ base: 3, md: 6, xl: 4 }}>
        <Text fontSize={labelfontSize} color='gray.600'>
          {label}
        </Text>
      </Box>
    </Box>
  )
}

export default CountdownItem
