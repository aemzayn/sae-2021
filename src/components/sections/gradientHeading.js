import { Heading, useBreakpointValue } from '@chakra-ui/react'

function GradientHeading({ children }) {
  const titleSize = useBreakpointValue({ base: '2xl' })
  return (
    <Heading
      color='brand.main'
      size={titleSize}
      bg='gradient.main'
      backgroundClip='text'
      style={{ WebkitTextFillColor: 'transparent' }}
    >
      {children}
    </Heading>
  )
}

export default GradientHeading
