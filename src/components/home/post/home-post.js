import { VStack } from '@chakra-ui/react'
import HomePostTitle from './home-post-title'
import PostItem from './post-item'
import PrimaryButton from '../../buttons/primary-btn'

function HomePost() {
  return (
    <VStack
      spacing={{ base: 6 }}
      maxW='1400px'
      mx='auto'
      w='90%'
      align='flex-start'
      mb={{ base: '10vh', md: '15vh' }}
    >
      <HomePostTitle />
      <VStack spacing={{ base: 7 }}>
        <PostItem />
        <PostItem />
        <PostItem />
      </VStack>
      <PrimaryButton href='/news'>Read More</PrimaryButton>
    </VStack>
  )
}

export default HomePost
