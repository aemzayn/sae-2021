import { useRouter } from 'next/router'
import { isValidMotionProp, motion } from 'framer-motion'
import {
  AspectRatio,
  Box,
  forwardRef,
  Heading,
  Image,
  Skeleton,
} from '@chakra-ui/react'
import styles from './saecard.module.scss'

const Card = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)

export default function SAECard({ sae: { id, location, img, alt } }) {
  const router = useRouter()
  return (
    <Card
      className={styles.saecard}
      onClick={() => router.push(`/previous-sae/${id}`)}
      pos='relative'
      maxH={{ base: '12rem', md: '10rem', lg: '14rem', xl: '16rem' }}
      overflow='hidden'
      borderRadius={{ base: 'lg' }}
      pos='relative'
      transition='all 200ms ease-in-out'
      cursor='pointer'
      _hover={{
        boxShadow: 'sm',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        borderRadius={{ base: 'xl' }}
        w='100%'
        h='100%'
        objectFit='cover'
        objectPosition='center'
        src={img}
        alt={alt}
      />
      <Box
        color='white'
        pos='absolute'
        zIndex='10'
        left={{ base: '-5px', xl: '-6px' }}
        bottom={{ base: -1 }}
        userSelect='none'
      >
        <Heading
          mb={{ base: 0 }}
          fontSize={{ base: '2rem', xl: '2.5rem' }}
          as='h2'
          color='white'
        >
          SAE {id}
        </Heading>
        <Heading
          as='h1'
          fontSize={{ base: '4rem', md: '3.5rem', lg: '5rem' }}
          fontFamily='Inter'
          letterSpacing={{ base: 'tighter' }}
          textTransform='uppercase'
          wordBreak='break-word'
          lineHeight={0.8}
        >
          {location}
        </Heading>
      </Box>
    </Card>
  )
}
