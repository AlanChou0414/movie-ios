import SearchBar from '@Components/search.component'
import useAlert from '@Hooks/alert.hook'
import { styles } from '@Styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const PageMain = () => {
  const alert = useAlert()

  return (
    <SafeAreaView style={styles.flex}>
      <SearchBar />
    </SafeAreaView >
  )
}

export default PageMain