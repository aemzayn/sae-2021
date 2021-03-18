import { Box, Flex } from '@chakra-ui/react'
import { Timeline } from '../../../assets/icons'
import PrimaryButton from '../../buttons/primary-btn'
import SecondaryButton from '../../buttons/secondary-btn'

function HeroButtonGroup() {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', xl: 'flex-start' }}
      align={{ base: 'center' }}
      my={{ base: 4, md: 6 }}
      w={{ base: '100%' }}
    >
      <PrimaryButton
        icon={<Timeline w='1.5rem' h='1.5rem' />}
        href='/#timeline'
        name='timeline'
      >
        Timeline
      </PrimaryButton>
      <Box
        w={{ base: '100%', md: 'fit-content' }}
        mt={{ base: 2, md: 0 }}
        ml={{ base: 0, md: 3 }}
      >
        <SecondaryButton href='/buku-saku'>Buku Saku</SecondaryButton>
      </Box>
    </Flex>
  )
}

export default HeroButtonGroup
