import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'

function PostItem({ post }) {
  const postSize = useBreakpointValue({ base: 'md' })
  return (
    <Box>
      <Link href={`/news/${post?.slug}`}>
        <a>
          <Heading as='h3' size={postSize} color='brand.blue'>
            {post?.title}
          </Heading>
        </a>
      </Link>
      <Text color='gray.500' mt='2'>
        {post?.excerpt}
      </Text>
    </Box>
  )
}

export default PostItem
