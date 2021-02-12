import { Image } from '@chakra-ui/react'

function ContactIcon({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      loading='lazy'
      p={{ base: 1 }}
      borderRadius='md'
      bg='brand.main'
      w={{ base: '1.75rem', md: '2rem' }}
    />
  )
}

export default ContactIcon
