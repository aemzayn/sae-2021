import { chakra } from '@chakra-ui/react'
import GradientHeading from '../components/sections/gradientHeading'
import PageLayout from '../components/sections/page-layout'
import SEO from '../components/seo'

function BukuSaku() {
  return (
    <PageLayout>
      <SEO
        title='Buku Saku'
        description='Buku saku dan panduan Simposium Amerika Eropa 2021'
        url='/buku-saku'
      />
      <GradientHeading>Buku Saku</GradientHeading>
      <chakra.p mt={2}>Coming soon...</chakra.p>
    </PageLayout>
  )
}

export default BukuSaku
