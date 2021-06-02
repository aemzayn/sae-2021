import { Box, Heading, useBreakpointValue } from '@chakra-ui/react'
import TimelineItem from './timeline-item'
import styles from './timeline.module.scss'
import TIMELINE from '../../../../TIMELINE'

function HomeTimeline() {
  const titleSize = useBreakpointValue({ base: '2xl' })
  return (
    <Box bg='gradient.orange' id='timeline' as='section'>
      <Box maxW='1400px' w='90%' mx='auto'>
        <Heading
          size={titleSize}
          color='brand.red'
          textAlign='center'
          className={styles.timelineTitle}
          pt={{ base: '4rem' }}
          pb={{ base: 3 }}
        >
          Timeline
        </Heading>
        <Box className={styles.timeline}>
          {TIMELINE.map((timeline, id) => (
            <TimelineItem key={id} id={id + 1} timeline={timeline} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HomeTimeline
