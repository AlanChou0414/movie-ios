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
  const inputValue = useSelector((state: RootType) => state.Form)
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
          {
            search.page
              ? <ScrollList data={search} />
              : (
                <>
                  <Heading size="xl" mt="3" letterSpacing="3">
                    熱門搜尋
                  </Heading>
                  <ScrollList data={allSearch} />
                </>
              )
          }
        </Box>
      </Center>
    </SafeAreaView >
  )
}

export default PageMain