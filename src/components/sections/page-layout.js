import { Box } from '@chakra-ui/react'

export default function PageLayout({ children, ...rest }) {
  return (
    <Box
      w='90%'
      maxW='1400px'
      color='gray.900'
      mx='auto'
      minHeight={{ base: '83vh', md: '78vh' }}
      {...rest}
    >
      {children}
    </Box>
  )
}
