import { Box, Text } from '@chakra-ui/react'

function TimelineItem({ id, timeline }) {
  return (
    <Box>
      <Text
        fontSize={{ base: 'lg' }}
        fontWeight='bold'
        marginBottom={{ base: 2 }}
        color='brand.blue'
      >
        {timeline.date}
      </Text>
      <Text color='gray.700'>{timeline.desc}</Text>
    </Box>
  )
}

export default TimelineItem
