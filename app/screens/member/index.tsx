import { styles } from '@Styles/styles'
import { Box, Center, Heading } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

const PageMain = () => {

  return (
    <SafeAreaView style={styles.flex}>
      <Center>
        <Box alignItems="center" >
          <Heading size="xl" mt="3" color="light.100">會員</Heading>
        </Box>
      </Center>
    </SafeAreaView >
  )
}

export default PageMain