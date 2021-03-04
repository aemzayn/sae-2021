import Link from 'next/link'
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

function PrimaryButton({ children, href, icon, name, ...rest }) {
  return (
    <Link href={href}>
      <MotionButton
        pos='relative'
        bg='gradient.main'
        px='10'
        size='lg'
        color='white'
        rightIcon={icon && icon}
        transition='all 200ms ease-in-out'
        w={{ base: '100%', sm: '100%', md: 'fit-content' }}
        _active={{
          color: 'gradient.main',
          transform: 'translateY(0)',
        }}
        _hover={{
          bg: 'gradient.main',
          transform: 'translateY(-5px)',
          boxShadow: 'md',
        }}
        name={name}
        {...rest}
      >
        <a>{children}</a>
      </MotionButton>
    </Link>
  )
}

export default PrimaryButton
