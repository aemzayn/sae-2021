import { VStack } from '@chakra-ui/react'
import PostItem from '../../components/home/post/post-item'
import GradientHeading from '../../components/sections/gradientHeading'
import SEO from '../../components/seo'
import config from '../../components/seo/config.json'
import { listPosts } from '../../lib/posts'
import PageLayout from '../../components/sections/page-layout'

export default function News({ posts }) {
  return (
    <PageLayout>
      <SEO title='SAE Iberia News' />
      <VStack
        spacing={{ base: 6 }}
        align='flex-start'
        mb={{ base: '10vh', md: '15vh' }}
      >
        <GradientHeading>SAE Iberia News</GradientHeading>
        <VStack spacing={{ base: 7 }}>
          {posts?.map((p, i) => (
            <PostItem key={i} post={p} />
          ))}
        </VStack>
      </VStack>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = listPosts(1, config.posts_per_page)

  return {
    props: {
      posts,
    },
  }
}
