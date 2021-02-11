import { Box, Flex, Image } from '@chakra-ui/react'
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
      <PrimaryButton icon={<Image src='/icons/timeline.svg' />}>
        Timeline
      </PrimaryButton>
      <Box
        w={{ base: '100%', md: 'fit-content' }}
        mt={{ base: 2, md: 0 }}
        ml={{ base: 0, md: 3 }}
      >
        <SecondaryButton>Buku Saku</SecondaryButton>
      </Box>
    </Flex>
  )
}

export default HeroButtonGroup
