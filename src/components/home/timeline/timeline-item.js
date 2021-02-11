import { Box, Text } from '@chakra-ui/react'

function TimelineItem() {
  return (
    <Box>
      <Text
        fontSize={{ base: 'lg' }}
        fontWeight='bold'
        marginBottom={{ base: 2 }}
        color='brand.blue'
      >
        01 April 2021
      </Text>
      <Text color='gray.700'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis,
        ex iusto iste amet nisi est. Repellat corrupti quo dolor!
      </Text>
    </Box>
  )
}

export default TimelineItem
