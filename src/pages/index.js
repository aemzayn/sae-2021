import Hero from '../components/home/hero'
import HeroAbout from '../components/home/about/hero-about'
import HomePanitia from '../components/home/panitia/home-panitia'
import HomePost from '../components/home/post/home-post'
import HomeTimeline from '../components/home/timeline/home-timeline'
import HomeFooter from '../components/home/footer/home-footer'
import SEO from '../components/seo'
import { listPosts } from '../lib/posts'
import config from '../components/seo/config.json'

export default function Home({ posts }) {
  return (
    <div>
      <SEO title='Home' />
      <Hero />
      <HeroAbout />
      <HomePanitia />
      <HomePost posts={posts} />
      <HomeTimeline />
      <HomeFooter />
    </div>
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
