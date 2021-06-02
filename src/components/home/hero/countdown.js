import { useState } from 'react'
import ReactCountdown from 'react-countdown'
import { Box, Grid } from '@chakra-ui/react'
import CountdownItem from './countdown-item'
import CountdownTime from './countdown-time'

function Countdown() {
  const [date, setDate] = useState('2021-06-05T17:00:00.000Z')
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <Box
        pb={{ base: 8, md: 12, xl: 0 }}
        d='flex'
        flexDir={{ base: 'column', xl: 'column-reverse' }}
      >
        <Grid
          w={{ base: '100%', md: '90%', lg: '80%', xl: '100%' }}
          templateColumns={{ base: 'repeat(4, 25%)', xl: 'repeat(4, 5em)' }}
          gap={{ base: 0, xl: 2 }}
          mx={{ base: 'auto' }}
        >
          <CountdownItem
            label='Hari'
            time={completed ? 0 : days}
            isFirst={true}
          />
          <CountdownItem label='Jam' time={completed ? 0 : hours} />
          <CountdownItem label='Menit' time={completed ? 0 : minutes} />
          <CountdownItem
            label='Detik'
            time={completed ? 0 : seconds}
            isLast={true}
          />
        </Grid>
        <CountdownTime />
      </Box>
    )
  }

  return <ReactCountdown date={date} renderer={renderer} />
}

export default Countdown
