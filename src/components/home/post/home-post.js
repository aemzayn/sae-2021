import { VStack } from '@chakra-ui/react'
import HomePostTitle from './home-post-title'
import PostItem from './post-item'
import PrimaryButton from '../../buttons/primary-btn'

export default function HomePost({ posts }) {
  return (
    <VStack
      as='section'
      spacing={{ base: 6 }}
      maxW='1400px'
      mx='auto'
      w='90%'
      align='flex-start'
      py={{ base: 20, md: 40 }}
      // mb={{ base: '10vh', md: '15vh' }}
    >
      <HomePostTitle />
      <VStack spacing={{ base: 7 }}>
        {posts?.map((p, i) => (
          <PostItem key={i} post={p} />
        ))}
      </VStack>
      <PrimaryButton href='/news' name='Semua post'>
        Semua Post
      </PrimaryButton>
    </VStack>
  )
}
