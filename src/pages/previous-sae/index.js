import { Grid } from '@chakra-ui/react'
import SAECard from '../../components/previoussae/sae-card'
import GradientHeading from '../../components/sections/gradientHeading'
import PageLayout from '../../components/sections/page-layout'
import SEO from '../../components/seo'
import { previous_sae } from '../../components/previoussae/previoussae.json'

export default function PreviousSae() {
  return (
    <PageLayout pb={4}>
      <SEO
        title='Previous SAE'
        description='Dokumentasi SAE terdahulu'
        url='/previous-sae'
      />
      <GradientHeading>Previous SAE</GradientHeading>
      <Grid
        mt={{ base: 4, xl: 8 }}
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr 1fr',
          xl: 'repeat(3, 1fr)',
        }}
        gap={{ base: 6 }}
      >
        {previous_sae.map((sae, index) => (
          <SAECard key={index} sae={sae} />
        ))}
      </Grid>
    </PageLayout>
  )
}
