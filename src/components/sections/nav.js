import { useState } from 'react'
import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(show => !show)

  const routes = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Event',
      href: '/event',
    },
    {
      name: 'Buku Saku',
      href: '/buku-saku',
    },
    {
      name: 'News',
      href: '/news',
    },
    {
      name: 'Previous SAE',
      href: '/previous-sae',
    },
    {
      name: 'Publication',
      href: '/publication',
    },
  ]

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='90%'
      maxW='1400px'
      mx='auto'
      py={{ base: 6, lg: 8 }}
      bg='transparent'
    >
      <Logo />

      <Box
        cursor='pointer'
        display={{ base: 'block', md: 'none' }}
        onClick={toggleMenu}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      {/* Desktop nav items */}
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          align='center'
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={{ base: 'column', md: 'row' }}
          pt={[4, 4, 0, 0]}
          spacing='5'
        >
          {routes.map((r, i) => (
            <NavItem key={i} name={r.name} href={r.href} />
          ))}
        </Stack>
      </Box>
    </Flex>
  )
}

const Logo = () => (
  <Box h='40px'>
    <Link href='/'>
      <a>
        <Image h='100%' src={'/logo.png'} alt='logo' />
      </a>
    </Link>
  </Box>
)

function NavItem({ href, name }) {
  const router = useRouter()
  const isActive = router.pathname === href
  return (
    <Text
      color={isActive ? 'black' : 'gray.500'}
      pos='relative'
      _hover={{
        color: 'black',
      }}
      _after={{
        content: '""',
        pos: 'absolute',
        height: '2.5px',
        left: 0,
        right: 0,
        bottom: { base: '-4px', md: '-6px', xl: '-8px' },
        bg: isActive ? 'gradient.main' : 'none',
        borderRadius: '1rem',
      }}
    >
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </Text>
  )
}

const MenuIcon = () => <Image src='/icons/menu.svg' />
const CloseIcon = () => <Image src='/icons/close.svg' />
