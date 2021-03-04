import { chakra } from '@chakra-ui/react'
import GradientHeading from '../components/sections/gradientHeading'
import PageLayout from '../components/sections/page-layout'
import SEO from '../components/seo'

export default function Event() {
  return (
    <PageLayout>
      <SEO
        title='Event'
        url='/event'
        description='Event di Simposium Amerika Eropa 2021'
      />
      <GradientHeading>Event</GradientHeading>
      <chakra.p mt={2}>Coming soon...</chakra.p>
    </PageLayout>
  )
}
