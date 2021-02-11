import { Button, forwardRef } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const MotionButton = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Button ref={ref} {...chakraProps} />
  })
)

function SecondaryButton({ children = 'Button', href, icon }) {
  return (
    <MotionButton
      // pos='relative'
      bg='white'
      variant='outline'
      color='gray.400'
      // px='5'
      width={{ base: '100%', sm: '100%', md: 'fit-content' }}
      size='lg'
      rightIcon={icon && icon}
      transition='all 200ms ease-in-out'
      _active={{
        color: 'gradient.main',
      }}
    >
      {children}
    </MotionButton>
  )
}

export default SecondaryButton
