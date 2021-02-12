import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

function PostItem() {
  const postSize = useBreakpointValue({ base: 'md' })
  return (
    <Box>
      <Heading as='h3' size={postSize} color='brand.blue'>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Heading>
      <Text color='gray.500' mt='2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        distinctio similique inventore deleniti itaque laudantium explicabo.
        Laboriosam voluptatum veritatis quibusdam earum officia, ad omnis
        sapiente atque quo, quasi minus. Laudantium.
      </Text>
    </Box>
  )
}

export default PostItem
