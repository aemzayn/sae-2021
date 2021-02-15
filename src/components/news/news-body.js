import { Box } from '@chakra-ui/react'
import styles from './markdown.module.scss'

function NewsBody({ content }) {
  return <Box className={styles.markdown}>{content}</Box>
}

export default NewsBody
