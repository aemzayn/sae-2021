import { extendTheme, theme as ct } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const colors = {
  brand: {
    main: '#F8B73B',
    light: '#F9EBD0',
    red: '#CF0B23',
    blue: '#213E5A',
    pink: '#FCE9EC',
  },
  gradient: {
    main:
      'linear-gradient(51deg, rgba(255,56,80,1) 15%, rgba(247,156,3,1) 100%)',
    light:
      'radial-gradient(at bottom center, rgba(253,207,116,1) 0%, rgba(249,235,208,1) 100%)',
    orange:
      'linear-gradient(6deg, rgba(252,233,236,1) 0%, rgba(250,241,222,1) 100%)',
  },
  // Font size
  fs: {
    xl4: '72px',
    xl3: '60px',
    xl2: '48px',
    xl: '36px',
    lg: '30px',
    md: '20px',
    sm: '16px',
    xs: '14px',
  },
}

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xxl: '96em',
})

const fonts = {
  heading: `Product Sans, ${ct.fonts.heading}`,
  body: `Product Sans, ${ct.fonts.body}`,
  mono: ct.fonts.mono,
}

const theme = extendTheme({ fonts, colors, breakpoints })

export default theme
