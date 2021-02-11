import { Heading, useBreakpointValue } from '@chakra-ui/react'

function HeroTitle() {
  const size = useBreakpointValue({
    base: 'xl',
    md: 'xl',
    lg: '3xl',
    xl: '3xl',
  })

  return (
    <Heading
      textAlign={{ base: 'center', xl: 'left' }}
      as='h1'
      size={size}
      mt={{ base: 10, xl: 0 }}
      color='brand.blue'
      fontFamily='fontFamily.main'
      w={{ base: '100%', md: '90%', xl: '100%' }}
      mx={{ base: 'auto', xl: 0 }}
    >
      OISAA Symposium America-Europe Region
    </Heading>
  )
}

export default HeroTitle
