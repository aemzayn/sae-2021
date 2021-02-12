import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import TimelineItem from './timeline-item'
import styles from './timeline.module.scss'

function HomeTimeline() {
  const titleSize = useBreakpointValue({ base: '2xl' })
  return (
    <Box bg='gradient.orange' id='timeline'>
      <Box maxW='1400px' w='90%' mx='auto'>
        <Heading
          fontFamily='fontFamily.main'
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
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
        </Box>
      </Box>
    </Box>
  )
}

export default HomeTimeline
