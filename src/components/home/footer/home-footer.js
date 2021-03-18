import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Instagram, Mail } from '../../../assets/icons'
import GradientHeading from '../../sections/gradientHeading'

function HomeFooter() {
  return (
    <Box bg='brand.pink' as='section'>
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
              <Mail
                p={{ base: 1 }}
                borderRadius='md'
                bg='brand.main'
                w={{ base: '1.75rem', md: '2rem' }}
                h={{ base: '1.75rem', md: '2rem' }}
              />
              <Text
                color='brand.blue'
                as='a'
                href='mailto:sae.amerop@gmail.com'
              >
                sae.amerop@gmail.com
              </Text>
            </HStack>
            <HStack spacing={{ base: 2 }}>
              <Instagram
                p={{ base: 1 }}
                borderRadius='md'
                bg='brand.main'
                w={{ base: '1.75rem', md: '2rem' }}
                h={{ base: '1.75rem', md: '2rem' }}
              />
              <Text
                as='a'
                href='https://instagram.com/saeiberia2021'
                target='_blank'
                color='brand.blue'
                rel='noopener'
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
          <Text color='gray.700'>
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
