import { Box } from '@chakra-ui/react'

export default function PageLayout({ children }) {
  return (
    <Box w='90%' maxW='1400px' mx='auto' minHeight='70vh'>
      {children}
    </Box>
  )
}
