import { Box, Heading, useBreakpointValue } from '@chakra-ui/react'
import TimelineItem from './timeline-item'
import styles from './timeline.module.scss'

const timeline = [
  {
    date: '01 May 2021',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi repudiandae cupiditate mollitia cumque, eveniet debitis culpa perspiciatis incidunt et!',
  },
  {
    date: '07 May 2021',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi repudiandae cupiditate mollitia cumque, eveniet debitis culpa perspiciatis incidunt et!',
  },
  {
    date: '14 May 2021',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi repudiandae cupiditate mollitia cumque, eveniet debitis culpa perspiciatis incidunt et!',
  },
  {
    date: '21 May 2021',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi repudiandae cupiditate mollitia cumque, eveniet debitis culpa perspiciatis incidunt et!',
  },
  {
    date: '28 May 2021',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi repudiandae cupiditate mollitia cumque, eveniet debitis culpa perspiciatis incidunt et!',
  },
  {
    date: '03 June 2021',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi repudiandae cupiditate mollitia cumque, eveniet debitis culpa perspiciatis incidunt et!',
  },
]

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
          {timeline.map((time, id) => (
            <TimelineItem key={id} id={id + 1} timeline={time} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HomeTimeline
