import { chakra } from '@chakra-ui/react'
import { previous_sae } from '../../components/previoussae/previoussae.json'
import GradientHeading from '../../components/sections/gradientHeading'
import PageLayout from '../../components/sections/page-layout'
import SEO from '../../components/seo'

export default function Sae({ sae: { id, location, img, alt } }) {
  return (
    <PageLayout minH='78vh'>
      <SEO title={`SAE ${id}`} />
      <GradientHeading>{`SAE ${id}: ${location}`}</GradientHeading>
      <chakra.p mt={2}>Coming soon...</chakra.p>
    </PageLayout>
  )
}

export async function getStaticProps({ params }) {
  const { id } = params
  const data = previous_sae[id - 1]
  return {
    props: {
      sae: data,
    },
  }
}

export async function getStaticPaths() {
  const paths = previous_sae.map(sae => ({ params: { id: sae.id.toString() } }))
  return {
    paths,
    fallback: false,
  }
}
