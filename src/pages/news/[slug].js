import { VStack } from '@chakra-ui/react'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import NewsBody from '../../components/news/news-body'
import NewsTags from '../../components/news/news-tags'
import NewsTitle from '../../components/news/news-title'
import SEO from '../../components/seo'
import config from '../../components/seo/config.json'
import { getPostContent, listPosts } from '../../lib/posts'

export default function NewsPage({ source, post }) {
  const content = hydrate(source, {})
  const keywords = post.tags
  const url = `/news/${post.slug}`
  const fullUrl = config.base_url.slice(0, -2) + url
  return (
    <>
      <SEO
        url={url}
        title={post.title}
        keywords={keywords}
        description={post.excerpt}
      />
      <VStack
        as='article'
        spacing={{ base: 4 }}
        maxW='1400px'
        mx='auto'
        w={{ base: '90%', md: '80%', lg: '70%', xl: '60%' }}
        align='flex-start'
        mb={{ base: 5 }}
        pt={{ base: '2' }}
      >
        <NewsTitle title={post?.title} />
        <NewsBody content={content} />
        <NewsTags tags={post?.tags} />
      </VStack>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postContent = getPostContent(params.slug)
  const { data, content } = matter(postContent, {
    engines: {
      yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  })
  const mdxSource = await renderToString(content, {
    scope: {},
  })
  return {
    props: {
      source: mdxSource,
      post: data,
    },
  }
}

export async function getStaticPaths() {
  const paths = listPosts(1, 65535).map(it => ({
    params: {
      slug: it.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
