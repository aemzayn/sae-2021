import Hero from '../components/home/hero'
import HeroAbout from '../components/home/about/hero-about'
import HomePanitia from '../components/home/panitia/home-panitia'
import HomePost from '../components/home/post/home-post'
import HomeTimeline from '../components/home/timeline/home-timeline'
import HomeFooter from '../components/home/footer/home-footer'

function Home() {
  return (
    <div>
      <Hero />
      <HeroAbout />
      <HomePanitia />
      <HomePost />
      <HomeTimeline />
      <HomeFooter />
    </div>
  )
}

export default Home
