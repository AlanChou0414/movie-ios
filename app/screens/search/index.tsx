import { ScrollList } from '@Components/scrollList.component'
import { SearchBar } from '@Components/search.component'
import useApi from '@Hooks/api.hook'
import { styles } from '@Styles/styles'
import { RootType } from '@Types/reducer'
import { Box, Center, Heading } from 'native-base'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const PageMain = () => {
  const api = useApi()
  const search = useSelector((state: RootType) => state.Search)
  const [allSearch, setAllSearch] = useState<ResultProps>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.useFetchSearchAll()
      setAllSearch(data)
    }
    fetchData()
  }, [search])

  return (
    <SafeAreaView style={styles.flex}>
      <SearchBar />
      <Center>
        <Box alignItems="center">
          <Heading size="xl" mt="3" letterSpacing="3">
            熱門搜尋
          </Heading>
          {
            <ScrollList data={search.page ? search : allSearch} />
          }
        </Box>
      </Center>
    </SafeAreaView >
  )
}

export default PageMain