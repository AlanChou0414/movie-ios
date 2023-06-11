import { Loading } from '@Components/loading.component'
import { ScrollList } from '@Components/scrollList.component'
import { SearchBar } from '@Components/search.component'
import useAlert from '@Hooks/alert.hook'
import useApi from '@Hooks/api.hook'
import { styles } from '@Styles/styles'
import { RootType } from '@Types/reducer'
import { Box, Center, Heading } from 'native-base'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const PageMain = () => {
  const alert = useAlert()
  const api = useApi()
  const search = useSelector((state: RootType) => state.Search)
  const [popular, setPopular] = useState<ResultProps>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.useFetchSearchAll()
      setPopular(data)
    }
    fetchData()
  }, [])

  if (!popular) return <Loading />

  return (
    <SafeAreaView style={styles.flex}>
      <SearchBar />
      <Center>
        <Box alignItems="center">
          <Heading size="xl" mt="3" letterSpacing="3">
            {!search.page && '熱門電影'}
          </Heading>
          {
            <ScrollList data={search.page ? search : popular} />
          }
        </Box>
      </Center>
    </SafeAreaView >
  )
}

export default PageMain