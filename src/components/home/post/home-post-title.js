import { Heading, useBreakpointValue } from '@chakra-ui/react'

function HomePostTitle() {
  const titleSize = useBreakpointValue({ base: '2xl' })
  return (
    <Heading fontFamily='fontFamily.main' size={titleSize} color='brand.main'>
      Recent Post
    </Heading>
  )
}

export default HomePostTitle
