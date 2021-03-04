import { chakra } from '@chakra-ui/react'
import GradientHeading from '../components/sections/gradientHeading'
import PageLayout from '../components/sections/page-layout'
import SEO from '../components/seo'

function Publication() {
  return (
    <PageLayout>
      <SEO
        title='Publikasi'
        description='Publikasi SAE 2021'
        url='/publication'
      />
      <GradientHeading>Publikasi</GradientHeading>
      <chakra.p mt={2}>Coming soon...</chakra.p>
    </PageLayout>
  )
}

export default Publication
