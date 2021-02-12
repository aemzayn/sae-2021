import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import GradientHeading from '../../sections/gradientHeading'
import ContactIcon from './contact-icon'

function HomeFooter() {
  return (
    <Box bg='brand.pink'>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w='90%'
        maxW='1400px'
        mx='auto'
        py={{ base: '3rem' }}
      >
        <VStack
          align={{ base: 'flex-start' }}
          justify={{ base: 'center', md: 'flex-start' }}
          py={{ base: 4 }}
          w={{ base: '100%', md: '50%' }}
          spacing={{ base: 4, md: 8 }}
        >
          <GradientHeading>Contact</GradientHeading>
          <Flex flexDir={{ base: 'column' }}>
            <HStack spacing={{ base: 2 }} mb={{ base: 4 }}>
              <ContactIcon src='/icons/mail.svg' alt='instagram icon' />
              <Text
                color='brand.blue'
                as='a'
                href='mailto:sae.amerop@gmail.com'
              >
                sae.amerop@gmail.com
              </Text>
            </HStack>
            <HStack spacing={{ base: 2 }}>
              <ContactIcon src='/icons/instagram.svg' alt='instagram icon' />
              <Text
                as='a'
                href='https://instagram.com/saeiberia2021'
                target='_blank'
                color='brand.blue'
              >
                @saeiberia2021
              </Text>
            </HStack>
          </Flex>
        </VStack>

        <VStack
          align={{ base: 'flex-start' }}
          justify={{ base: 'center', md: 'flex-start' }}
          py={{ base: 4 }}
          w={{ base: '100%', md: '50%' }}
          spacing={{ base: 4, md: 8 }}
        >
          <GradientHeading>Location</GradientHeading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eaque
            autem suscipit minima placeat natus quod nostrum aperiam
            perspiciatis. Debitis.
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default HomeFooter
