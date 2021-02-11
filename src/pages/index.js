import HeroAbout from '../components/home/about/hero-about'
import Hero from '../components/home/hero'
import HomePanitia from '../components/home/panitia/home-panitia'
import HomePost from '../components/home/post/home-post'
import HomeTimeline from '../components/home/timeline/home-timeline'

function Home() {
  return (
    <div>
      <Hero />
      <HeroAbout />
      <HomePanitia />
      <HomePost />
      <HomeTimeline />
    </div>
  )
}

export default Home
