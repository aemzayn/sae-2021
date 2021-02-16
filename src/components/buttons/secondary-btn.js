import { Button, forwardRef } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import Link from 'next/link'

const MotionButton = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Button ref={ref} {...chakraProps} />
  })
)

function SecondaryButton({ children = 'Button', href, icon, name }) {
  return (
    <Link href={href}>
      <MotionButton
        name={name}
        bg='white'
        variant='outline'
        color='gray.400'
        width={{ base: '100%', sm: '100%', md: 'fit-content' }}
        size='lg'
        rightIcon={icon && icon}
        transition='all 200ms ease-in-out'
        _active={{
          color: 'gradient.main',
        }}
      >
        <a>{children}</a>
      </MotionButton>
    </Link>
  )
}

export default SecondaryButton
