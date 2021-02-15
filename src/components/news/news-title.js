import { Heading, useBreakpointValue } from '@chakra-ui/react'

function NewsTitle({ title }) {
  const titleSize = useBreakpointValue({ base: '2xl' })
  return (
    <Heading color='brand.blue' size={titleSize}>
      {title}
    </Heading>
  )
}

export default NewsTitle
