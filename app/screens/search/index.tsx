import { Loading } from '@Components/loading.component'
import { ScrollList } from '@Components/scrollList.component'
import { SearchBar } from '@Components/search.component'
import useApi from '@Hooks/api.hook'
import { styles } from '@Styles/styles'
import { RootType } from '@Types/reducer'
import { Box, Center } from 'native-base'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const PageMain = () => {
  const api = useApi()
  const search = useSelector((state: RootType) => state.Search)
  const [popular, setPopular] = useState<ResultProps>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.useFetchPopular()
      setPopular(data)
    }
    fetchData()
  }, [search])

  if (!popular) return <Loading />

  return (
    <SafeAreaView style={styles.flex}>
      <SearchBar />
      <Center>
        <Box alignItems="center" >
          {
            search.page && <ScrollList data={search} />
          }
        </Box>
      </Center>
    </SafeAreaView >
  )
}

export default PageMain