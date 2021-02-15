import { Flex, HStack, Stack, Text } from '@chakra-ui/react'

export default function NewsTags({ tags }) {
  return (
    <HStack opacity='40%' flexWrap='wrap'>
      <Text color='gray.900' marginBottom='1'>
        Tags:
      </Text>
      {tags.map((tag, index) => (
        <Text
          marginBottom='1'
          key={index}
          px='3'
          py='1px'
          borderRadius='xl'
          color='black'
          bgColor='white'
          fontSize='sm'
          variant='outline'
          border='1px solid black'
        >
          {tag}
        </Text>
      ))}
    </HStack>
  )
}
