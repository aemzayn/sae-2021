import { Box, Heading, Text } from '@chakra-ui/react'

function TimelineItem({ timeline }) {
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
      <Heading size='md' mb={{ base: 2 }}>
        {timeline.title}
      </Heading>
      <Text color='gray.700'>{timeline.desc}</Text>
    </Box>
  )
}

export default TimelineItem
